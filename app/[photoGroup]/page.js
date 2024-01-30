import React from 'react'
import PhotoGroup from './PhotoGroup'
import {
  hazratImages,
  kashmirImages,
  helenaImages,
  rajasthanImages,
  lakeImages,
  prideImages,
  londonImages,
  wildlifeImages,
  portraitsImages,
  concertImages,
} from './data/imagesData'

const PhotoPage = ({ params }) => {
  let group = ''
  let photos = ''
  if (params.photoGroup === 'hazrat') {
    group = 'Hazrat Nizamuddin Auliya Durgah'
    photos = hazratImages
  } else if (params.photoGroup === 'kashmir') {
    group = 'Kashmir'
    photos = kashmirImages
  } else if (params.photoGroup === 'helena') {
    group = 'Fashion - Helena Antonio'
    photos = helenaImages
  } else if (params.photoGroup === 'rajasthan') {
    group = 'Rajasthan'
    photos = rajasthanImages
  } else if (params.photoGroup === 'lake') {
    group = 'Lake District'
    photos = lakeImages
  } else if (params.photoGroup === 'pride') {
    group = 'Pride'
    photos = prideImages
  } else if (params.photoGroup === 'london') {
    group = 'London'
    photos = londonImages
  } else if (params.photoGroup === 'life') {
    group = 'Life'
    photos = wildlifeImages
  } else if (params.photoGroup === 'portraits') {
    group = 'Portraits'
    photos = portraitsImages
  } else if (params.photoGroup === 'concert') {
    group = 'Concert'
    photos = concertImages
  }
  return <PhotoGroup photoGroup={group} photos={photos} />
}

export default PhotoPage
