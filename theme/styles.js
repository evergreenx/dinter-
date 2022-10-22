import { StyleSheet } from 'react-native'

const predefineStyle = {
  "absolute": { 
    "position": "absolute" 
  },
  "relative": { 
    "position": "relative" 
  },
  "pin-t": { 
    "top": 0 
  },
  "pin-b": { 
    "bottom": 0 
  },
  "pin-l": { 
    "left": 0 
  },
  "pin-r": { 
    "right": 0 
  },
  "pin-x": { 
    "left": 0, 
    "right": 0 
  },
  "pin-y": { 
    "top": 0, 
    "bottom": 0 
  },
  "pin": { 
    "top": 0, 
    "bottom": 0, 
    "left": 0, 
    "right": 0 
  },
  "italic": { 
    "fontStyle": "italic" 
  },
  "roman": { 
    "fontStyle": "normal" 
  },
  "uppercase": { 
    "textTransform": "uppercase" 
  },
  "lowercase": { 
    "textTransform": "lowercase" 
  },
  "capitalize": {
     "textTransform": "capitalize" 
  },
  "normal-case": { 
    "textTransform": "none" 
  },
  "underline": {
     "textDecorationLine": "underline" 
  },
  "line-through": { 
    "textDecorationLine": "line-through" 
  },
  "no-underline": { 
    "textDecorationLine": "none" 
  },
  "text-left": {
     "textAlign": "left" 
  },
  "text-center": { 
    "textAlign": "center" 
  },
  "text-right": {
     "textAlign": "right" 
  },
  "text-justify": { 
    "textAlign": "justify" 
  },
  "shadow": {
    "shadowColor": "#000",
    "shadowOffset": {
      "width": 0,
      "height": 1
    },
    "shadowOpacity": 0.2,
    "shadowRadius": 1.41,
    "elevation": 2
  },
  "shadow-md": {
    "shadowColor": "#000",
    "shadowOffset": {
      "width": 0,
      "height": 2
    },
    "shadowOpacity": 0.23,
    "shadowRadius": 2.62,
    "elevation": 4
  },
  "shadow-lg": {
    "shadowColor": "#000",
    "shadowOffset": {
      "width": 0,
      "height": 3
    },
    "shadowOpacity": 0.27,
    "shadowRadius": 4.65,
    "elevation": 6
  },
  "shadow-none": {
    "shadowColor": "#000",
    "shadowOffset": {
      "width": 0,
      "height": 0
    },
    "shadowOpacity": 0,
    "shadowRadius": 0,
    "elevation": 0
  }
}

const generatedStyle = {
  "border-solid": {
    "borderStyle": "solid"
  },
  "border-dashed": {
    "borderStyle": "dashed"
  },
  "border-dotted": {
    "borderStyle": "dotted"
  },
  "flex-shrink": {
    "flexShrink": 1
  },
  "flex-no-shrink": {
    "flexShrink": 0
  },
  "flex-grow": {
    "flexGrow": 1
  },
  "flex-no-grow": {
    "flexGrow": 0
  },
  "flex-no-wrap": {
    "flexWrap": "nowrap"
  },
  "flex-wrap": {
    "flexWrap": "wrap"
  },
  "flex-wrap-reverse": {
    "flexWrap": "wrap-reverse"
  },
  "flex-row": {
    "flexDirection": "row"
  },
  "flex-col": {
    "flexDirection": "column"
  },
  "flex-row-reverse": {
    "flexDirection": "row-reverse"
  },
  "flex-col-reverse": {
    "flexDirection": "column-reverse"
  },
  "justify-center": {
    "justifyContent": "center"
  },
  "justify-start": {
    "justifyContent": "flex-start"
  },
  "justify-end": {
    "justifyContent": "flex-end"
  },
  "justify-around": {
    "justifyContent": "space-around"
  },
  "justify-between": {
    "justifyContent": "space-between"
  },
  "justify-evenly": {
    "justifyContent": "space-evenly"
  },
  "self-auto": {
    "alignSelf": "auto"
  },
  "self-center": {
    "alignSelf": "center"
  },
  "self-start": {
    "alignSelf": "flex-start"
  },
  "self-end": {
    "alignSelf": "flex-end"
  },
  "self-stretch": {
    "alignSelf": "stretch"
  },
  "content-center": {
    "alignContent": "center"
  },
  "content-start": {
    "alignContent": "flex-start"
  },
  "content-end": {
    "alignContent": "flex-end"
  },
  "content-around": {
    "alignContent": "space-around"
  },
  "content-between": {
    "alignContent": "space-between"
  },
  "content-stretch": {
    "alignContent": "stretch"
  },
  "items-center": {
    "alignItems": "center"
  },
  "items-start": {
    "alignItems": "flex-start"
  },
  "items-end": {
    "alignItems": "flex-end"
  },
  "items-baseline": {
    "alignItems": "baseline"
  },
  "items-stretch": {
    "alignItems": "stretch"
  },
  "flex-1": {
    "flex": 1
  },
  "flex-1/2": {
    "flex": 0.5
  },
  "flex-1/4": {
    "flex": 0.25
  },
  "opacity-0": {
    "opacity": 0
  },
  "opacity-25": {
    "opacity": 0.25
  },
  "opacity-50": {
    "opacity": 0.5
  },
  "opacity-75": {
    "opacity": 0.75
  },
  "opacity-100": {
    "opacity": 1
  },
  "z-0": {
    "zIndex": 0
  },
  "z-10": {
    "zIndex": 10
  },
  "z-20": {
    "zIndex": 20
  },
  "z-30": {
    "zIndex": 30
  },
  "z-40": {
    "zIndex": 40
  },
  "z-50": {
    "zIndex": 50
  },
  "m-0": {
    "margin": 0
  },
  "ml-0": {
    "marginLeft": 0
  },
  "mr-0": {
    "marginRight": 0
  },
  "mt-0": {
    "marginTop": 0
  },
  "mb-0": {
    "marginBottom": 0
  },
  "mx-0": {
    "marginLeft": 0,
    "marginRight": 0
  },
  "my-0": {
    "marginTop": 0,
    "marginBottom": 0
  },
  "m-1": {
    "margin": 4
  },
  "ml-1": {
    "marginLeft": 4
  },
  "mr-1": {
    "marginRight": 4
  },
  "mt-1": {
    "marginTop": 4
  },
  "mb-1": {
    "marginBottom": 4
  },
  "mx-1": {
    "marginLeft": 4,
    "marginRight": 4
  },
  "my-1": {
    "marginTop": 4,
    "marginBottom": 4
  },
  "m-2": {
    "margin": 8
  },
  "ml-2": {
    "marginLeft": 8
  },
  "mr-2": {
    "marginRight": 8
  },
  "mt-2": {
    "marginTop": 8
  },
  "mb-2": {
    "marginBottom": 8
  },
  "mx-2": {
    "marginLeft": 8,
    "marginRight": 8
  },
  "my-2": {
    "marginTop": 8,
    "marginBottom": 8
  },
  "m-3": {
    "margin": 12
  },
  "ml-3": {
    "marginLeft": 12
  },
  "mr-3": {
    "marginRight": 12
  },
  "mt-3": {
    "marginTop": 12
  },
  "mb-3": {
    "marginBottom": 12
  },
  "mx-3": {
    "marginLeft": 12,
    "marginRight": 12
  },
  "my-3": {
    "marginTop": 12,
    "marginBottom": 12
  },
  "m-4": {
    "margin": 16
  },
  "ml-4": {
    "marginLeft": 16
  },
  "mr-4": {
    "marginRight": 16
  },
  "mt-4": {
    "marginTop": 16
  },
  "mb-4": {
    "marginBottom": 16
  },
  "mx-4": {
    "marginLeft": 16,
    "marginRight": 16
  },
  "my-4": {
    "marginTop": 16,
    "marginBottom": 16
  },
  "m-5": {
    "margin": 20
  },
  "ml-5": {
    "marginLeft": 20
  },
  "mr-5": {
    "marginRight": 20
  },
  "mt-5": {
    "marginTop": 20
  },
  "mb-5": {
    "marginBottom": 20
  },
  "mx-5": {
    "marginLeft": 20,
    "marginRight": 20
  },
  "my-5": {
    "marginTop": 20,
    "marginBottom": 20
  },
  "m-6": {
    "margin": 24
  },
  "ml-6": {
    "marginLeft": 24
  },
  "mr-6": {
    "marginRight": 24
  },
  "mt-6": {
    "marginTop": 24
  },
  "mb-6": {
    "marginBottom": 24
  },
  "mx-6": {
    "marginLeft": 24,
    "marginRight": 24
  },
  "my-6": {
    "marginTop": 24,
    "marginBottom": 24
  },
  "m-8": {
    "margin": 32
  },
  "ml-8": {
    "marginLeft": 32
  },
  "mr-8": {
    "marginRight": 32
  },
  "mt-8": {
    "marginTop": 32
  },
  "mb-8": {
    "marginBottom": 32
  },
  "mx-8": {
    "marginLeft": 32,
    "marginRight": 32
  },
  "my-8": {
    "marginTop": 32,
    "marginBottom": 32
  },
  "m-10": {
    "margin": 40
  },
  "ml-10": {
    "marginLeft": 40
  },
  "mr-10": {
    "marginRight": 40
  },
  "mt-10": {
    "marginTop": 40
  },
  "mb-10": {
    "marginBottom": 40
  },
  "mx-10": {
    "marginLeft": 40,
    "marginRight": 40
  },
  "my-10": {
    "marginTop": 40,
    "marginBottom": 40
  },
  "m-px": {
    "margin": 1
  },
  "ml-px": {
    "marginLeft": 1
  },
  "mr-px": {
    "marginRight": 1
  },
  "mt-px": {
    "marginTop": 1
  },
  "mb-px": {
    "marginBottom": 1
  },
  "mx-px": {
    "marginLeft": 1,
    "marginRight": 1
  },
  "my-px": {
    "marginTop": 1,
    "marginBottom": 1
  },
  "p-0": {
    "padding": 0
  },
  "pl-0": {
    "paddingLeft": 0
  },
  "pr-0": {
    "paddingRight": 0
  },
  "pt-0": {
    "paddingTop": 0
  },
  "pb-0": {
    "paddingBottom": 0
  },
  "px-0": {
    "paddingLeft": 0,
    "paddingRight": 0
  },
  "py-0": {
    "paddingTop": 0,
    "paddingBottom": 0
  },
  "p-1": {
    "padding": 4
  },
  "pl-1": {
    "paddingLeft": 4
  },
  "pr-1": {
    "paddingRight": 4
  },
  "pt-1": {
    "paddingTop": 4
  },
  "pb-1": {
    "paddingBottom": 4
  },
  "px-1": {
    "paddingLeft": 4,
    "paddingRight": 4
  },
  "py-1": {
    "paddingTop": 4,
    "paddingBottom": 4
  },
  "p-2": {
    "padding": 8
  },
  "pl-2": {
    "paddingLeft": 8
  },
  "pr-2": {
    "paddingRight": 8
  },
  "pt-2": {
    "paddingTop": 8
  },
  "pb-2": {
    "paddingBottom": 8
  },
  "px-2": {
    "paddingLeft": 8,
    "paddingRight": 8
  },
  "py-2": {
    "paddingTop": 8,
    "paddingBottom": 8
  },
  "p-3": {
    "padding": 12
  },
  "pl-3": {
    "paddingLeft": 12
  },
  "pr-3": {
    "paddingRight": 12
  },
  "pt-3": {
    "paddingTop": 12
  },
  "pb-3": {
    "paddingBottom": 12
  },
  "px-3": {
    "paddingLeft": 12,
    "paddingRight": 12
  },
  "py-3": {
    "paddingTop": 12,
    "paddingBottom": 12
  },
  "p-4": {
    "padding": 16
  },
  "pl-4": {
    "paddingLeft": 16
  },
  "pr-4": {
    "paddingRight": 16
  },
  "pt-4": {
    "paddingTop": 16
  },
  "pb-4": {
    "paddingBottom": 16
  },
  "px-4": {
    "paddingLeft": 16,
    "paddingRight": 16
  },
  "py-4": {
    "paddingTop": 16,
    "paddingBottom": 16
  },
  "p-5": {
    "padding": 20
  },
  "pl-5": {
    "paddingLeft": 20
  },
  "pr-5": {
    "paddingRight": 20
  },
  "pt-5": {
    "paddingTop": 20
  },
  "pb-5": {
    "paddingBottom": 20
  },
  "px-5": {
    "paddingLeft": 20,
    "paddingRight": 20
  },
  "py-5": {
    "paddingTop": 20,
    "paddingBottom": 20
  },
  "p-6": {
    "padding": 24
  },
  "pl-6": {
    "paddingLeft": 24
  },
  "pr-6": {
    "paddingRight": 24
  },
  "pt-6": {
    "paddingTop": 24
  },
  "pb-6": {
    "paddingBottom": 24
  },
  "px-6": {
    "paddingLeft": 24,
    "paddingRight": 24
  },
  "py-6": {
    "paddingTop": 24,
    "paddingBottom": 24
  },
  "p-8": {
    "padding": 32
  },
  "pl-8": {
    "paddingLeft": 32
  },
  "pr-8": {
    "paddingRight": 32
  },
  "pt-8": {
    "paddingTop": 32
  },
  "pb-8": {
    "paddingBottom": 32
  },
  "px-8": {
    "paddingLeft": 32,
    "paddingRight": 32
  },
  "py-8": {
    "paddingTop": 32,
    "paddingBottom": 32
  },
  "p-10": {
    "padding": 40
  },
  "pl-10": {
    "paddingLeft": 40
  },
  "pr-10": {
    "paddingRight": 40
  },
  "pt-10": {
    "paddingTop": 40
  },
  "pb-10": {
    "paddingBottom": 40
  },
  "px-10": {
    "paddingLeft": 40,
    "paddingRight": 40
  },
  "py-10": {
    "paddingTop": 40,
    "paddingBottom": 40
  },
  "p-px": {
    "padding": 1
  },
  "pl-px": {
    "paddingLeft": 1
  },
  "pr-px": {
    "paddingRight": 1
  },
  "pt-px": {
    "paddingTop": 1
  },
  "pb-px": {
    "paddingBottom": 1
  },
  "px-px": {
    "paddingLeft": 1,
    "paddingRight": 1
  },
  "py-px": {
    "paddingTop": 1,
    "paddingBottom": 1
  },
  "max-h-full": {
    "maxHeight": "100%"
  },
  "max-w-xs": {
    "maxWidth": 320
  },
  "max-w-sm": {
    "maxWidth": 480
  },
  "max-w-md": {
    "maxWidth": 640
  },
  "max-w-lg": {
    "maxWidth": 800
  },
  "max-w-xl": {
    "maxWidth": 960
  },
  "max-w-2xl": {
    "maxWidth": 1120
  },
  "max-w-3xl": {
    "maxWidth": 1280
  },
  "max-w-4xl": {
    "maxWidth": 1440
  },
  "max-w-5xl": {
    "maxWidth": 1600
  },
  "max-w-full": {
    "maxWidth": "100%"
  },
  "min-h-0": {
    "minHeight": 0
  },
  "min-h-full": {
    "minHeight": "100%"
  },
  "min-w-0": {
    "minWidth": 0
  },
  "min-w-full": {
    "minWidth": "100%"
  },
  "h-1": {
    "height": 4
  },
  "h-2": {
    "height": 8
  },
  "h-3": {
    "height": 12
  },
  "h-4": {
    "height": 16
  },
  "h-5": {
    "height": 20
  },
  "h-6": {
    "height": 24
  },
  "h-8": {
    "height": 32
  },
  "h-10": {
    "height": 40
  },
  "h-12": {
    "height": 48
  },
  "h-16": {
    "height": 64
  },
  "h-24": {
    "height": 96
  },
  "h-32": {
    "height": 128
  },
  "h-48": {
    "height": 192
  },
  "h-64": {
    "height": 256
  },
  "h-px": {
    "height": 1
  },
  "h-1/2": {
    "height": "50%"
  },
  "h-1/3": {
    "height": "33.33333%"
  },
  "h-2/3": {
    "height": "66.66667%"
  },
  "h-1/4": {
    "height": "25%"
  },
  "h-3/4": {
    "height": "75%"
  },
  "h-1/5": {
    "height": "20%"
  },
  "h-2/5": {
    "height": "40%"
  },
  "h-3/5": {
    "height": "60%"
  },
  "h-4/5": {
    "height": "80%"
  },
  "h-1/6": {
    "height": "16.66667%"
  },
  "h-5/6": {
    "height": "83.33333%"
  },
  "h-full": {
    "height": "100%"
  },
  "w-1": {
    "width": 4
  },
  "w-2": {
    "width": 8
  },
  "w-3": {
    "width": 12
  },
  "w-4": {
    "width": 16
  },
  "w-5": {
    "width": 20
  },
  "w-6": {
    "width": 24
  },
  "w-8": {
    "width": 32
  },
  "w-10": {
    "width": 40
  },
  "w-12": {
    "width": 48
  },
  "w-16": {
    "width": 64
  },
  "w-24": {
    "width": 96
  },
  "w-32": {
    "width": 128
  },
  "w-48": {
    "width": 192
  },
  "w-64": {
    "width": 256
  },
  "w-px": {
    "width": 1
  },
  "w-1/2": {
    "width": "50%"
  },
  "w-1/3": {
    "width": "33.33333%"
  },
  "w-2/3": {
    "width": "66.66667%"
  },
  "w-1/4": {
    "width": "25%"
  },
  "w-3/4": {
    "width": "75%"
  },
  "w-1/5": {
    "width": "20%"
  },
  "w-2/5": {
    "width": "40%"
  },
  "w-3/5": {
    "width": "60%"
  },
  "w-4/5": {
    "width": "80%"
  },
  "w-1/6": {
    "width": "16.66667%"
  },
  "w-5/6": {
    "width": "83.33333%"
  },
  "w-full": {
    "width": "100%"
  },
  "rounded-none": {
    "borderRadius": 0
  },
  "rounded-t-none": {
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0
  },
  "rounded-l-none": {
    "borderTopLeftRadius": 0,
    "borderBottomLeftRadius": 0
  },
  "rounded-r-none": {
    "borderTopRightRadius": 0,
    "borderBottomRightRadius": 0
  },
  "rounded-b-none": {
    "borderBottomRightRadius": 0,
    "borderBottomLeftRadius": 0
  },
  "rounded-tl-none": {
    "borderTopLeftRadius": 0
  },
  "rounded-tr-none": {
    "borderTopRightRadius": 0
  },
  "rounded-bl-none": {
    "borderBottomLeftRadius": 0
  },
  "rounded-br-none": {
    "borderBottomRightRadius": 0
  },
  "rounded-sm": {
    "borderRadius": 2
  },
  "rounded-t-sm": {
    "borderTopLeftRadius": 2,
    "borderTopRightRadius": 2
  },
  "rounded-l-sm": {
    "borderTopLeftRadius": 2,
    "borderBottomLeftRadius": 2
  },
  "rounded-r-sm": {
    "borderTopRightRadius": 2,
    "borderBottomRightRadius": 2
  },
  "rounded-b-sm": {
    "borderBottomRightRadius": 2,
    "borderBottomLeftRadius": 2
  },
  "rounded-tl-sm": {
    "borderTopLeftRadius": 2
  },
  "rounded-tr-sm": {
    "borderTopRightRadius": 2
  },
  "rounded-bl-sm": {
    "borderBottomLeftRadius": 2
  },
  "rounded-br-sm": {
    "borderBottomRightRadius": 2
  },
  "rounded": {
    "borderRadius": 4
  },
  "rounded-t": {
    "borderTopLeftRadius": 4,
    "borderTopRightRadius": 4
  },
  "rounded-l": {
    "borderTopLeftRadius": 4,
    "borderBottomLeftRadius": 4
  },
  "rounded-r": {
    "borderTopRightRadius": 4,
    "borderBottomRightRadius": 4
  },
  "rounded-b": {
    "borderBottomRightRadius": 4,
    "borderBottomLeftRadius": 4
  },
  "rounded-tl": {
    "borderTopLeftRadius": 4
  },
  "rounded-tr": {
    "borderTopRightRadius": 4
  },
  "rounded-bl": {
    "borderBottomLeftRadius": 4
  },
  "rounded-br": {
    "borderBottomRightRadius": 4
  },
  "rounded-lg": {
    "borderRadius": 8
  },
  "rounded-t-lg": {
    "borderTopLeftRadius": 8,
    "borderTopRightRadius": 8
  },
  "rounded-l-lg": {
    "borderTopLeftRadius": 8,
    "borderBottomLeftRadius": 8
  },
  "rounded-r-lg": {
    "borderTopRightRadius": 8,
    "borderBottomRightRadius": 8
  },
  "rounded-b-lg": {
    "borderBottomRightRadius": 8,
    "borderBottomLeftRadius": 8
  },
  "rounded-tl-lg": {
    "borderTopLeftRadius": 8
  },
  "rounded-tr-lg": {
    "borderTopRightRadius": 8
  },
  "rounded-bl-lg": {
    "borderBottomLeftRadius": 8
  },
  "rounded-br-lg": {
    "borderBottomRightRadius": 8
  },
  "rounded-full": {
    "borderRadius": 300
  },
  "rounded-t-full": {
    "borderTopLeftRadius": 300,
    "borderTopRightRadius": 300
  },
  "rounded-l-full": {
    "borderTopLeftRadius": 300,
    "borderBottomLeftRadius": 300
  },
  "rounded-r-full": {
    "borderTopRightRadius": 300,
    "borderBottomRightRadius": 300
  },
  "rounded-b-full": {
    "borderBottomRightRadius": 300,
    "borderBottomLeftRadius": 300
  },
  "rounded-tl-full": {
    "borderTopLeftRadius": 300
  },
  "rounded-tr-full": {
    "borderTopRightRadius": 300
  },
  "rounded-bl-full": {
    "borderBottomLeftRadius": 300
  },
  "rounded-br-full": {
    "borderBottomRightRadius": 300
  },
  "border-0": {
    "borderWidth": 0
  },
  "border-l-0": {
    "borderLeftWidth": 0
  },
  "border-r-0": {
    "borderRightWidth": 0
  },
  "border-t-0": {
    "borderTopWidth": 0
  },
  "border-b-0": {
    "borderBottomWidth": 0
  },
  "border-x-0": {
    "borderLeftWidth": 0,
    "borderRightWidth": 0
  },
  "border-y-0": {
    "borderTopWidth": 0,
    "borderBottomWidth": 0
  },
  "border-2": {
    "borderWidth": 2
  },
  "border-l-2": {
    "borderLeftWidth": 2
  },
  "border-r-2": {
    "borderRightWidth": 2
  },
  "border-t-2": {
    "borderTopWidth": 2
  },
  "border-b-2": {
    "borderBottomWidth": 2
  },
  "border-x-2": {
    "borderLeftWidth": 2,
    "borderRightWidth": 2
  },
  "border-y-2": {
    "borderTopWidth": 2,
    "borderBottomWidth": 2
  },
  "border-4": {
    "borderWidth": 4
  },
  "border-l-4": {
    "borderLeftWidth": 4
  },
  "border-r-4": {
    "borderRightWidth": 4
  },
  "border-t-4": {
    "borderTopWidth": 4
  },
  "border-b-4": {
    "borderBottomWidth": 4
  },
  "border-x-4": {
    "borderLeftWidth": 4,
    "borderRightWidth": 4
  },
  "border-y-4": {
    "borderTopWidth": 4,
    "borderBottomWidth": 4
  },
  "border-8": {
    "borderWidth": 8
  },
  "border-l-8": {
    "borderLeftWidth": 8
  },
  "border-r-8": {
    "borderRightWidth": 8
  },
  "border-t-8": {
    "borderTopWidth": 8
  },
  "border-b-8": {
    "borderBottomWidth": 8
  },
  "border-x-8": {
    "borderLeftWidth": 8,
    "borderRightWidth": 8
  },
  "border-y-8": {
    "borderTopWidth": 8,
    "borderBottomWidth": 8
  },
  "border": {
    "borderWidth": 1,
    "borderColor": "#dae1e7"
  },
  "border-l": {
    "borderLeftWidth": 1
  },
  "border-r": {
    "borderRightWidth": 1
  },
  "border-t": {
    "borderTopWidth": 1
  },
  "border-b": {
    "borderBottomWidth": 1
  },
  "border-x": {
    "borderLeftWidth": 1,
    "borderRightWidth": 1
  },
  "border-y": {
    "borderTopWidth": 1,
    "borderBottomWidth": 1
  },
  "bg-center": {
    "resizeMode": "center"
  },
  "bg-contain": {
    "resizeMode": "contain"
  },
  "bg-cover": {
    "resizeMode": "cover"
  },
  "bg-repeat": {
    "resizeMode": "repeat"
  },
  "bg-stretch": {
    "resizeMode": "stretch"
  },
  "tracking-tight": {
    "letterSpacing": -0.8
  },
  "tracking-normal": {
    "letterSpacing": 0
  },
  "tracking-wide": {
    "letterSpacing": 0.8
  },
  "leading-none": {
    "lineHeight": 16
  },
  "leading-tight": {
    "lineHeight": 20
  },
  "leading-normal": {
    "lineHeight": 24
  },
  "leading-loose": {
    "lineHeight": 32
  },
  "font-hairline": {
    "fontWeight": "100"
  },
  "font-thin": {
    "fontWeight": "200"
  },
  "font-light": {
    "fontWeight": "300"
  },
  "font-normal": {
    "fontWeight": "400"
  },
  "font-medium": {
    "fontWeight": "500"
  },
  "font-semibold": {
    "fontWeight": "600"
  },
  "font-bold": {
    "fontWeight": "700"
  },
  "font-extrabold": {
    "fontWeight": "800"
  },
  "font-black": {
    "fontWeight": "900"
  },
  "text-xs": {
    "fontSize": 12
  },
  "text-sm": {
    "fontSize": 14
  },
  "text-base": {
    "fontSize": 16
  },
  "text-lg": {
    "fontSize": 18
  },
  "text-xl": {
    "fontSize": 20
  },
  "text-2xl": {
    "fontSize": 24
  },
  "text-3xl": {
    "fontSize": 30
  },
  "text-4xl": {
    "fontSize": 36
  },
  "text-5xl": {
    "fontSize": 48
  },
  "border-transparent": {
    "borderColor": "transparent"
  },
  "border-black": {
    "borderColor": "#22292f"
  },
  "border-grey-darkest": {
    "borderColor": "#3d4852"
  },
  "border-grey-darker": {
    "borderColor": "#606f7b"
  },
  "border-grey-dark": {
    "borderColor": "#8795a1"
  },
  "border-grey": {
    "borderColor": "#b8c2cc"
  },
  "border-grey-light": {
    "borderColor": "#dae1e7"
  },
  "border-grey-lighter": {
    "borderColor": "#f1f5f8"
  },
  "border-grey-lightest": {
    "borderColor": "#f8fafc"
  },
  "border-white": {
    "borderColor": "#ffffff"
  },
  "border-red-darkest": {
    "borderColor": "#3b0d0c"
  },
  "border-red-darker": {
    "borderColor": "#621b18"
  },
  "border-red-dark": {
    "borderColor": "#cc1f1a"
  },
  "border-red": {
    "borderColor": "#e3342f"
  },
  "border-red-light": {
    "borderColor": "#ef5753"
  },
  "border-red-lighter": {
    "borderColor": "#f9acaa"
  },
  "border-red-lightest": {
    "borderColor": "#fcebea"
  },
  "border-orange-darkest": {
    "borderColor": "#462a16"
  },
  "border-orange-darker": {
    "borderColor": "#613b1f"
  },
  "border-orange-dark": {
    "borderColor": "#de751f"
  },
  "border-orange": {
    "borderColor": "#f6993f"
  },
  "border-orange-light": {
    "borderColor": "#faad63"
  },
  "border-orange-lighter": {
    "borderColor": "#fcd9b6"
  },
  "border-orange-lightest": {
    "borderColor": "#fff5eb"
  },
  "border-yellow-darkest": {
    "borderColor": "#453411"
  },
  "border-yellow-darker": {
    "borderColor": "#684f1d"
  },
  "border-yellow-dark": {
    "borderColor": "#f2d024"
  },
  "border-yellow": {
    "borderColor": "#ffed4a"
  },
  "border-yellow-light": {
    "borderColor": "#fff382"
  },
  "border-yellow-lighter": {
    "borderColor": "#fff9c2"
  },
  "border-yellow-lightest": {
    "borderColor": "#fcfbeb"
  },
  "border-green-darkest": {
    "borderColor": "#0f2f21"
  },
  "border-green-darker": {
    "borderColor": "#1a4731"
  },
  "border-green-dark": {
    "borderColor": "#1f9d55"
  },
  "border-green": {
    "borderColor": "#38c172"
  },
  "border-green-light": {
    "borderColor": "#51d88a"
  },
  "border-green-lighter": {
    "borderColor": "#a2f5bf"
  },
  "border-green-lightest": {
    "borderColor": "#e3fcec"
  },
  "border-teal-darkest": {
    "borderColor": "#0d3331"
  },
  "border-teal-darker": {
    "borderColor": "#20504f"
  },
  "border-teal-dark": {
    "borderColor": "#38a89d"
  },
  "border-teal": {
    "borderColor": "#4dc0b5"
  },
  "border-teal-light": {
    "borderColor": "#64d5ca"
  },
  "border-teal-lighter": {
    "borderColor": "#a0f0ed"
  },
  "border-teal-lightest": {
    "borderColor": "#e8fffe"
  },
  "border-blue-darkest": {
    "borderColor": "#12283a"
  },
  "border-blue-darker": {
    "borderColor": "#1c3d5a"
  },
  "border-blue-dark": {
    "borderColor": "#2779bd"
  },
  "border-blue": {
    "borderColor": "#3490dc"
  },
  "border-blue-light": {
    "borderColor": "#6cb2eb"
  },
  "border-blue-lighter": {
    "borderColor": "#bcdefa"
  },
  "border-blue-lightest": {
    "borderColor": "#eff8ff"
  },
  "border-indigo-darkest": {
    "borderColor": "#191e38"
  },
  "border-indigo-darker": {
    "borderColor": "#2f365f"
  },
  "border-indigo-dark": {
    "borderColor": "#5661b3"
  },
  "border-indigo": {
    "borderColor": "#6574cd"
  },
  "border-indigo-light": {
    "borderColor": "#7886d7"
  },
  "border-indigo-lighter": {
    "borderColor": "#b2b7ff"
  },
  "border-indigo-lightest": {
    "borderColor": "#e6e8ff"
  },
  "border-purple-darkest": {
    "borderColor": "#21183c"
  },
  "border-purple-darker": {
    "borderColor": "#382b5f"
  },
  "border-purple-dark": {
    "borderColor": "#794acf"
  },
  "border-purple": {
    "borderColor": "#9561e2"
  },
  "border-purple-light": {
    "borderColor": "#a779e9"
  },
  "border-purple-lighter": {
    "borderColor": "#d6bbfc"
  },
  "border-purple-lightest": {
    "borderColor": "#f3ebff"
  },
  "border-pink-darkest": {
    "borderColor": "#451225"
  },
  "border-pink-darker": {
    "borderColor": "#6f213f"
  },
  "border-pink-dark": {
    "borderColor": "#eb5286"
  },
  "border-pink": {
    "borderColor": "#f66d9b"
  },
  "border-pink-light": {
    "borderColor": "#fa7ea8"
  },
  "border-pink-lighter": {
    "borderColor": "#ffbbca"
  },
  "border-pink-lightest": {
    "borderColor": "#ffebef"
  },
  "bg-transparent": {
    "backgroundColor": "transparent"
  },
  "bg-black": {
    "backgroundColor": "#22292f"
  },
  "bg-grey-darkest": {
    "backgroundColor": "#3d4852"
  },
  "bg-grey-darker": {
    "backgroundColor": "#606f7b"
  },
  "bg-grey-dark": {
    "backgroundColor": "#8795a1"
  },
  "bg-grey": {
    "backgroundColor": "#b8c2cc"
  },
  "bg-grey-light": {
    "backgroundColor": "#dae1e7"
  },
  "bg-grey-lighter": {
    "backgroundColor": "#f1f5f8"
  },
  "bg-grey-lightest": {
    "backgroundColor": "#f8fafc"
  },
  "bg-white": {
    "backgroundColor": "#ffffff"
  },
  "bg-red-darkest": {
    "backgroundColor": "#3b0d0c"
  },
  "bg-red-darker": {
    "backgroundColor": "#621b18"
  },
  "bg-red-dark": {
    "backgroundColor": "#cc1f1a"
  },
  "bg-red": {
    "backgroundColor": "#e3342f"
  },
  "bg-red-light": {
    "backgroundColor": "#ef5753"
  },
  "bg-red-lighter": {
    "backgroundColor": "#f9acaa"
  },
  "bg-red-lightest": {
    "backgroundColor": "#fcebea"
  },
  "bg-orange-darkest": {
    "backgroundColor": "#462a16"
  },
  "bg-orange-darker": {
    "backgroundColor": "#613b1f"
  },
  "bg-orange-dark": {
    "backgroundColor": "#de751f"
  },
  "bg-orange": {
    "backgroundColor": "#f6993f"
  },
  "bg-orange-light": {
    "backgroundColor": "#faad63"
  },
  "bg-orange-lighter": {
    "backgroundColor": "#fcd9b6"
  },
  "bg-orange-lightest": {
    "backgroundColor": "#fff5eb"
  },
  "bg-yellow-darkest": {
    "backgroundColor": "#453411"
  },
  "bg-yellow-darker": {
    "backgroundColor": "#684f1d"
  },
  "bg-yellow-dark": {
    "backgroundColor": "#f2d024"
  },
  "bg-yellow": {
    "backgroundColor": "#ffed4a"
  },
  "bg-yellow-light": {
    "backgroundColor": "#fff382"
  },
  "bg-yellow-lighter": {
    "backgroundColor": "#fff9c2"
  },
  "bg-yellow-lightest": {
    "backgroundColor": "#fcfbeb"
  },
  "bg-green-darkest": {
    "backgroundColor": "#0f2f21"
  },
  "bg-green-darker": {
    "backgroundColor": "#1a4731"
  },
  "bg-green-dark": {
    "backgroundColor": "#1f9d55"
  },
  "bg-green": {
    "backgroundColor": "#38c172"
  },
  "bg-green-light": {
    "backgroundColor": "#51d88a"
  },
  "bg-green-lighter": {
    "backgroundColor": "#a2f5bf"
  },
  "bg-green-lightest": {
    "backgroundColor": "#e3fcec"
  },
  "bg-teal-darkest": {
    "backgroundColor": "#0d3331"
  },
  "bg-teal-darker": {
    "backgroundColor": "#20504f"
  },
  "bg-teal-dark": {
    "backgroundColor": "#38a89d"
  },
  "bg-teal": {
    "backgroundColor": "#4dc0b5"
  },
  "bg-teal-light": {
    "backgroundColor": "#64d5ca"
  },
  "bg-teal-lighter": {
    "backgroundColor": "#a0f0ed"
  },
  "bg-teal-lightest": {
    "backgroundColor": "#e8fffe"
  },
  "bg-blue-darkest": {
    "backgroundColor": "#12283a"
  },
  "bg-blue-darker": {
    "backgroundColor": "#1c3d5a"
  },
  "bg-blue-dark": {
    "backgroundColor": "#2779bd"
  },
  "bg-blue": {
    "backgroundColor": "#3490dc"
  },
  "bg-blue-light": {
    "backgroundColor": "#6cb2eb"
  },
  "bg-blue-lighter": {
    "backgroundColor": "#bcdefa"
  },
  "bg-blue-lightest": {
    "backgroundColor": "#eff8ff"
  },
  "bg-indigo-darkest": {
    "backgroundColor": "#191e38"
  },
  "bg-indigo-darker": {
    "backgroundColor": "#2f365f"
  },
  "bg-indigo-dark": {
    "backgroundColor": "#5661b3"
  },
  "bg-indigo": {
    "backgroundColor": "#6574cd"
  },
  "bg-indigo-light": {
    "backgroundColor": "#7886d7"
  },
  "bg-indigo-lighter": {
    "backgroundColor": "#b2b7ff"
  },
  "bg-indigo-lightest": {
    "backgroundColor": "#e6e8ff"
  },
  "bg-purple-darkest": {
    "backgroundColor": "#21183c"
  },
  "bg-purple-darker": {
    "backgroundColor": "#382b5f"
  },
  "bg-purple-dark": {
    "backgroundColor": "#794acf"
  },
  "bg-purple": {
    "backgroundColor": "#9561e2"
  },
  "bg-purple-light": {
    "backgroundColor": "#a779e9"
  },
  "bg-purple-lighter": {
    "backgroundColor": "#d6bbfc"
  },
  "bg-purple-lightest": {
    "backgroundColor": "#f3ebff"
  },
  "bg-pink-darkest": {
    "backgroundColor": "#451225"
  },
  "bg-pink-darker": {
    "backgroundColor": "#6f213f"
  },
  "bg-pink-dark": {
    "backgroundColor": "#eb5286"
  },
  "bg-pink": {
    "backgroundColor": "#f66d9b"
  },
  "bg-pink-light": {
    "backgroundColor": "#fa7ea8"
  },
  "bg-pink-lighter": {
    "backgroundColor": "#ffbbca"
  },
  "bg-pink-lightest": {
    "backgroundColor": "#ffebef"
  },
  "text-transparent": {
    "color": "transparent"
  },
  "text-black": {
    "color": "#22292f"
  },
  "text-grey-darkest": {
    "color": "#3d4852"
  },
  "text-grey-darker": {
    "color": "#606f7b"
  },
  "text-grey-dark": {
    "color": "#8795a1"
  },
  "text-grey": {
    "color": "#b8c2cc"
  },
  "text-grey-light": {
    "color": "#dae1e7"
  },
  "text-grey-lighter": {
    "color": "#f1f5f8"
  },
  "text-grey-lightest": {
    "color": "#f8fafc"
  },
  "text-white": {
    "color": "#ffffff"
  },
  "text-red-darkest": {
    "color": "#3b0d0c"
  },
  "text-red-darker": {
    "color": "#621b18"
  },
  "text-red-dark": {
    "color": "#cc1f1a"
  },
  "text-red": {
    "color": "#e3342f"
  },
  "text-red-light": {
    "color": "#ef5753"
  },
  "text-red-lighter": {
    "color": "#f9acaa"
  },
  "text-red-lightest": {
    "color": "#fcebea"
  },
  "text-orange-darkest": {
    "color": "#462a16"
  },
  "text-orange-darker": {
    "color": "#613b1f"
  },
  "text-orange-dark": {
    "color": "#de751f"
  },
  "text-orange": {
    "color": "#f6993f"
  },
  "text-orange-light": {
    "color": "#faad63"
  },
  "text-orange-lighter": {
    "color": "#fcd9b6"
  },
  "text-orange-lightest": {
    "color": "#fff5eb"
  },
  "text-yellow-darkest": {
    "color": "#453411"
  },
  "text-yellow-darker": {
    "color": "#684f1d"
  },
  "text-yellow-dark": {
    "color": "#f2d024"
  },
  "text-yellow": {
    "color": "#ffed4a"
  },
  "text-yellow-light": {
    "color": "#fff382"
  },
  "text-yellow-lighter": {
    "color": "#fff9c2"
  },
  "text-yellow-lightest": {
    "color": "#fcfbeb"
  },
  "text-green-darkest": {
    "color": "#0f2f21"
  },
  "text-green-darker": {
    "color": "#1a4731"
  },
  "text-green-dark": {
    "color": "#1f9d55"
  },
  "text-green": {
    "color": "#38c172"
  },
  "text-green-light": {
    "color": "#51d88a"
  },
  "text-green-lighter": {
    "color": "#a2f5bf"
  },
  "text-green-lightest": {
    "color": "#e3fcec"
  },
  "text-teal-darkest": {
    "color": "#0d3331"
  },
  "text-teal-darker": {
    "color": "#20504f"
  },
  "text-teal-dark": {
    "color": "#38a89d"
  },
  "text-teal": {
    "color": "#4dc0b5"
  },
  "text-teal-light": {
    "color": "#64d5ca"
  },
  "text-teal-lighter": {
    "color": "#a0f0ed"
  },
  "text-teal-lightest": {
    "color": "#e8fffe"
  },
  "text-blue-darkest": {
    "color": "#12283a"
  },
  "text-blue-darker": {
    "color": "#1c3d5a"
  },
  "text-blue-dark": {
    "color": "#2779bd"
  },
  "text-blue": {
    "color": "#3490dc"
  },
  "text-blue-light": {
    "color": "#6cb2eb"
  },
  "text-blue-lighter": {
    "color": "#bcdefa"
  },
  "text-blue-lightest": {
    "color": "#eff8ff"
  },
  "text-indigo-darkest": {
    "color": "#191e38"
  },
  "text-indigo-darker": {
    "color": "#2f365f"
  },
  "text-indigo-dark": {
    "color": "#5661b3"
  },
  "text-indigo": {
    "color": "#6574cd"
  },
  "text-indigo-light": {
    "color": "#7886d7"
  },
  "text-indigo-lighter": {
    "color": "#b2b7ff"
  },
  "text-indigo-lightest": {
    "color": "#e6e8ff"
  },
  "text-purple-darkest": {
    "color": "#21183c"
  },
  "text-purple-darker": {
    "color": "#382b5f"
  },
  "text-purple-dark": {
    "color": "#794acf"
  },
  "text-purple": {
    "color": "#9561e2"
  },
  "text-purple-light": {
    "color": "#a779e9"
  },
  "text-purple-lighter": {
    "color": "#d6bbfc"
  },
  "text-purple-lightest": {
    "color": "#f3ebff"
  },
  "text-pink-darkest": {
    "color": "#451225"
  },
  "text-pink-darker": {
    "color": "#6f213f"
  },
  "text-pink-dark": {
    "color": "#eb5286"
  },
  "text-pink": {
    "color": "#f66d9b"
  },
  "text-pink-light": {
    "color": "#fa7ea8"
  },
  "text-pink-lighter": {
    "color": "#ffbbca"
  },
  "text-pink-lightest": {
    "color": "#ffebef"
  }
}

const obj = Object.assign(generatedStyle, predefineStyle)

export const styles = StyleSheet.create(obj)

export function apply(style) {
  let result = {}
  const _styles = style.split(' ')
  _styles.forEach(_style => {
    result = Object.assign(result, styles[_style])
  })
  return result
}
