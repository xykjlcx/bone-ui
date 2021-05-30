import React, { forwardRef } from 'react'
import { Box } from '@fower/react'
import { FowerHTMLProps } from '@fower/types'

export interface BadgeProps extends FowerHTMLProps<'div'> {
  variant?: 'standard' | 'dot'

  content?: string | number

  max?: number
}

export const Badge = forwardRef<HTMLDivElement, BadgeProps>((props, ref) => {
  const { variant = 'standard', children, content, max, ...rest } = props
  const hasChildren = !!children
  const isStandard = variant === 'standard'

  const offsetStyle = {
    transform: 'translate(50%, -50%)',
    transformOrigin: '100% 0%',
  }

  return (
    <Box className={`bone-badge bone-badge-${variant}`} ref={ref} relative inlineFlex>
      <Box
        className="bone-badge-content"
        absolute={hasChildren}
        top={hasChildren ? 0 : false}
        right={hasChildren ? 0 : false}
        h={isStandard ? 20 : 8}
        minW={isStandard ? 20 : 8}
        px-6={isStandard}
        leading-20px={isStandard}
        toCenter
        text-12
        white
        bgRed500
        rounded-9999
        zIndex-1
        css={hasChildren ? offsetStyle : {}}
        {...rest}
      >
        {isStandard && getContent(content, max)}
      </Box>
      {children}
    </Box>
  )
})

function getContent(content?: string | number, max: number = 0) {
  if (typeof content !== 'number') return content
  if (max > 0) return max + '+'
  return content
}
