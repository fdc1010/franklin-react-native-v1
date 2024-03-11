import { HomeStackParamList } from "@/app/App";
import { useMovies } from "@app/api/movie/movie.hooks";
import { Movie } from "@app/lib";
import { escapeRegExp } from "@app/util/escapeRegExp";
import { StackNavigationProp } from "@react-navigation/stack";
import React, { useCallback, useEffect, useState } from "react";
import { StyleSheet, View, Button, Image } from "react-native";
import { DataTable, TextInput, Title } from "react-native-paper";

type HomeScreenNavigationProp = StackNavigationProp<
  HomeStackParamList,
  "Details"
>;

type HomeScreenProps = {
  navigation: HomeScreenNavigationProp;
};

function Home({ navigation }: HomeScreenProps) {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [filteredMovies, setFilteredMovies] = useState<Movie[]>([]);
  const [title, setTitle] = useState<string>();
  const [loading, setLoading] = useState<boolean>(false);
  const { isPending, isError, data, error } = useMovies();

  if (isError) throw error;

  useEffect(() => {
    if (!isPending && !isError) {
      setMovies(data.movies);
      setFilteredMovies(data.movies);
    }
  }, [data]);

  const fetchSearchResults = (searchText: string | null) => {
    try {
      let filteredData: Array<Movie>;
      const filterFn = makeSearchFilterFunction(searchText);
      filteredData = movies.filter(filterFn);
      setFilteredMovies(filteredData);
    } catch (error) {
      console.error("Error", error);
      // Handle the error, e.g., show an error message to the user
    } finally {
      setLoading(false);
    }
  };

  const handleFilter = (e: string) => {
      if (e !== undefined) {
        setTitle(e);
        setLoading(true);
        debouncedSearch(e);
      }
    };

  const debouncedSearch = debounce(fetchSearchResults, 500);

  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <Title>Movies</Title>
      <TextInput
        onChangeText={handleFilter}
        value={title}
        style={{ width: 300, height: 40, margin: 5 }}
      ></TextInput>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Details")}
      />
      <DataTable style={styles.container}>
        <DataTable.Header style={styles.tableHeader}>
          <DataTable.Title>Title</DataTable.Title>
          <DataTable.Title>Poster</DataTable.Title>
          <DataTable.Title>Released</DataTable.Title>
        </DataTable.Header>
        {filteredMovies.map((movie, i) => (
          <DataTable.Row
            key={`movie${i}`}
            onPress={() => navigation.navigate("Details", { movie })}
          >
            <DataTable.Cell>{movie.title}</DataTable.Cell>
            <DataTable.Cell>
              <Image style={styles.logo} source={{ uri: `${movie.poster}` }} />
            </DataTable.Cell>
            <DataTable.Cell>{movie.released}</DataTable.Cell>
          </DataTable.Row>
        ))}
      </DataTable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  tableHeader: {
    backgroundColor: "#DCDCDC",
  },
  logo: {
    width: 66,
    height: 58,
  },
});

const makeSearchFilterFunction = (searchText: string | null) => {
  return function (movie: Movie): boolean {
    if (searchText === null || searchText === "") {
      return true;
    }

    return (
      movie.title.match(new RegExp(escapeRegExp(searchText), "i")) !== null
    );
  };
};

const debounce = (
  func: { apply: (arg0: undefined, arg1: any[]) => void },
  delay: number | undefined
) => {
  let timeoutId: string | number | NodeJS.Timeout | undefined;

  return (...args: any) => {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
};

export { Home };
