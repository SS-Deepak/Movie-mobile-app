import { icons } from '@/constants/icons';
import { Link } from 'expo-router';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

interface MovieCardProps {
  id: number;
  title: string;
  adult?: boolean;
  backdrop_path?: string;
  genre_ids?: number[];
  original_language?: string;
  original_title?: string;
  overview?: string;
  popularity?: number;
  poster_path?: string;
  release_date?: string;
  video?: boolean;
  vote_average: number;
  vote_count?: number;
}


const MovieCard = (item: MovieCardProps) => {
  return (
    <Link href={`/movies/${item.id}`} asChild>
      <TouchableOpacity className='w-[30%]'>
        <Image
          source={{
            uri: item.poster_path
              ? `https://image.tmdb.org/t/p/w500${item.poster_path}`
              : 'https://placehold.co/600x400/1a1a1a/ffffff.png'
            // : 'https://via.placeholder.com/500x750?text=No+Image+Available'
          }}
          className='w-full h-52 rounded-lg'
          resizeMode='cover'
        />

        <Text className='text-white text-sm font-semibold mt-2'
          numberOfLines={1}>
          {item.title}
        </Text>

        <View className="flex-row items-center justify-start gap-x-1">
          <Image
            source={icons.star}
            className='size-4'
          />

          <Text className='text-xs text-white font-bold uppercase'>
            {Math.round(item?.vote_average / 2)}
          </Text>
        </View>

        <View className='flex-row items-center justify-between '>
          <Text className='text-xs text-light-300 font-medium mt-1'>
            {item?.release_date?.split('-')[0] || ''}
          </Text>
        </View>

      </TouchableOpacity>
    </Link>
  )
}

export default MovieCard