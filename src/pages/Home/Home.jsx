import React from 'react'
import { HeroSection } from '../../components/HeroSection'
import { MenuItems } from '../../components/MenuItems'
import { Services } from '../../components/Services'
import { BlogsSection } from '../../components/blogs'
export const Home = () => {
  return (
    <>
    <HeroSection/>
    <MenuItems/>
    <Services/>
    <BlogsSection/>
    </>
  )
}
