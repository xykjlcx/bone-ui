import React from 'react'
import { Link } from 'umi'
import { Box } from '@styli/react'

export default function Home() {
  return (
    <Box center spaceX-20 wrap px-100 pt-20>
      <Link to="/">Home</Link>
      <Link to="/AlertDemo">AlertDemo</Link>
      <Link to="/AvatarDemo">AvatarDemo</Link>
      <Link to="/BadgeDemo">BadgeDemo</Link>
      <Link to="/TagDemo">TagDemo</Link>
      <Link to="/ButtonDemo">ButtonDemo</Link>
      <Link to="/CardDemo">CardDemo</Link>
      <Link to="/CheckboxDemo">CheckboxDemo</Link>
      <Link to="/CloseButtonDemo">CloseButtonDemo</Link>
      <Link to="/DotDemo">DotDemo</Link>
      <Link to="/IconDemo">IconDemo</Link>
      <Link to="/InputDemo">InputDemo</Link>
      <Link to="/RadioDemo">RadioDemo</Link>
      <Link to="/SpinnerDemo">SpinnerDemo</Link>
    </Box>
  )
}