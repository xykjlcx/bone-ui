import React from 'react'
import { Tag } from '@bone-ui/tag'
import { Box } from '@fower/react'
import MailOutline from '@bone-ui/icons/lib/MailOutline'
import LocationMarkerOutline from '@bone-ui/icons/lib/LocationMarkerOutline'

export default function TagDemo() {
  return (
    <Box>
      <Box spaceX-10 toLeft>
        <Tag>Red</Tag>
        <Tag icon={<MailOutline></MailOutline>}>Red</Tag>
        <Tag icon={<LocationMarkerOutline></LocationMarkerOutline>}>Red</Tag>

        <Tag variant="outline">Green</Tag>

        <Tag variant="outline" icon={<MailOutline></MailOutline>}>
          Red
        </Tag>

        <Tag colorScheme="orange400">Red</Tag>

        <Tag colorScheme="red400">Red</Tag>

        <Tag colorScheme="red400">Red</Tag>
      </Box>

      <h1>Size</h1>

      <Box spaceX-10 toLeft>
        <Tag direction="row-reverse" icon={<LocationMarkerOutline></LocationMarkerOutline>}>
          Red
        </Tag>

        <Tag size="sm" icon={<MailOutline></MailOutline>}>
          Red
        </Tag>
        <Tag size="md" icon={<LocationMarkerOutline></LocationMarkerOutline>}>
          Red
        </Tag>

        <Tag size="lg" icon={<LocationMarkerOutline></LocationMarkerOutline>}>
          Red
        </Tag>

        <Tag size={48} icon={<LocationMarkerOutline></LocationMarkerOutline>}>
          Red
        </Tag>

        <Tag size={56} icon={<LocationMarkerOutline></LocationMarkerOutline>}>
          Red
        </Tag>
      </Box>
    </Box>
  )
}