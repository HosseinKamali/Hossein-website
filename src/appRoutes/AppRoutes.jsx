import React from 'react';
import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import Videos from "../pages/videos/Videos";
import PodCast from "../pages/podCast/PadCast";
import Mobile from "../pages/mobile/Mobile";
import Toys from "../pages/toys/Toys";
import PostGallery from "../pages/postGallery/PostGallery";
import PostVideo from "../pages/postVideo/PostVideo";
import PostAudio from "../pages/postAudio/PostAudio";
import PostStyle from "../pages/postStyle/PostStyle";
import ArchivePage from "../pages/archivePage/ArchivePage";
import AuthorPages from "../pages/AuthorPages/AuthorPages";
import Shop from "../pages/Shop/Shop";
import Page404 from "../pages/Page404/Page404";
import CreatePosts from "../pages/CreatePosts/CreatePosts";
import Photo from "../pages/photo/Photo";
import ProductDetails from '../pages/ProductDetails/ProductDetails';
import ShoppingCart from '../pages/ShoppingCart/ShoppingCart';
import Shop2 from '../pages/shop2/Shop2';
import ProductDetails2 from '../pages/productDetails2/ProductDetails2';
import ButtonSearch from '../components/buttons/buttonSearch/ButtonSearch';
import ShirtsProducts from '../pages/shirtsproducts/ShirtsProducts';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/photo" element={<Photo />} />
      <Route path="/videos" element={<Videos />} />
      <Route path="/podcast" element={<PodCast />} />
      <Route path="/mobile" element={<Mobile />} />
      <Route path="/toys" element={<Toys />} />
      <Route path="/post-gallery" element={<PostGallery />} />
      <Route path="/post-video" element={<PostVideo />} />
      <Route path="/post-audio" element={<PostAudio />} />
      <Route path="/post-style" element={<PostStyle />} />
      <Route path="/archive-page" element={<ArchivePage />} />
      <Route path="/author-pages" element={<AuthorPages />} />
      <Route path="/shop2" element={<Shop2 />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/page-404" element={<Page404 />} />
      <Route path="/create-posts" element={<CreatePosts />} />
      <Route path="/cart" element={<ShoppingCart/>}/>
      <Route path='/product/:id' element={<ProductDetails/>} />
      <Route path='/product2/:id' element={<ProductDetails2/>} />
      <Route path='/search' element={<ButtonSearch/>}/>
      <Route path='shirts' element={<ShirtsProducts/>}/>
    </Routes>
  );
}

export default AppRoutes;
