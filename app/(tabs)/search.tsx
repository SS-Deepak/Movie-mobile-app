import MovieCard from '@/components/MovieCard';
import SearchBar from '@/components/SearchBar';
import { icons } from '@/constants/icons';
import { images } from '@/constants/images';
import { fetchMovies } from '@/services/api';
import { useFetch } from '@/services/useFetch';
import React from 'react';
import { ActivityIndicator, FlatList, Image, ScrollView, Text, View } from 'react-native';

const SearchMovies = () => {
  const [query, setQuery] = React.useState<string>('');

  const {
    data: movies,
    error,
    loading,
    refetch,
    reset
  } = useFetch(() => fetchMovies(query), false);

  React.useEffect(() => {
    const sto = setTimeout(() => {

      if (query?.trim()) {
        refetch();
      } else {
        reset();
      }
    }, 500);

    return () => {
      clearTimeout(sto);
    }
  }, [query]);


  return (
    <View className='flex-1 bg-primary '>
      <Image
        source={images.bg}
        className='absolute w-full z-0 '
      />

      <ScrollView
        className='flex-1 px-5'
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          minHeight: '100%',
          paddingBottom: 10,
        }}
      >
        <FlatList
          data={movies}
          renderItem={({ item }) => (
            <MovieCard {...item} />
          )}
          keyExtractor={(item) => item.id.toString()}
          numColumns={3}
          columnWrapperStyle={{
            justifyContent: 'flex-start',
            gap: 20,
            paddingRight: 5,
            marginBottom: 10,
          }}
          scrollEnabled={false}
          className='mt-2 pb-32'
          ListHeaderComponent={<>
            <Image
              source={icons.logo}
              className='w-12 h-10 mt-20 mb-5 mx-auto'
            />

            {loading
              ? <ActivityIndicator
                size={'large'}
                color={'#0000ff'}
                className='mt-10 self-center'
              /> : null
            }

            {
              error
                ? <Text className='text-red-500 text-center mt-5'>
                  Error: {error?.message ?? ''}
                </Text>
                : null
            }

            <View className='flex-1 mt-5'>
              <SearchBar
                placeholder='Search for a movie...'
                value={query}
                onChangeText={(text) => setQuery(text)}
              />
            </View>
          </>}

          ListEmptyComponent={
            !loading && !error
              ? <>
                <View className='mt-10 px-5'>
                  <Text className='text-center text-gray-500'>
                    {
                      query?.trim()
                        ? `No results found for "${query}"`
                        : 'Please enter a search term to find movies.'
                    }
                  </Text>
                </View>
              </>
              : null
          }
        />
      </ScrollView>
    </View >

  )
}

export default SearchMovies;