/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}"
  ],
  theme: {
  	extend: {
  		container: {
  			center: true,
  			padding: '1rem',
  			screens: {
  				xl: '1140px',
  				lg: '960px',
  				md: '768px',
  				sm: '576px'
  			}
  		},
  		borderRadius: {
			  lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
		},
		fontFamily: {
			sans: 'var(--font-sans, Inter), sans-serif',
			heading: 'var(--font-heading, Poppins), sans-serif',
			mono: 'var(--font-mono)'
		},
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
			header: {
				background: 'hsl(var(--header-background, var(--primary)))',
				foreground: 'hsl(var(--header-foreground, var(--primary-foreground)))'
			},
			footer: {
				background: 'hsl(var(--footer-background, var(--secondary)))',
				foreground: 'hsl(var(--footer-foreground, var(--secondary-foreground)))'
			},
			button: {
				DEFAULT: 'hsl(var(--button-background))',
				foreground: 'hsl(var(--button-foreground))'
			  },
			sidebar: {
				DEFAULT: 'hsl(var(--sidebar-background))',
				foreground: 'hsl(var(--sidebar-foreground))'
			},
			modal: {
				DEFAULT: 'hsl(var(--modal-background))',
				foreground: 'hsl(var(--modal-foreground))'
			},
			badge: {
				DEFAULT: 'hsl(var(--badge-background))',
				foreground: 'hsl(var(--badge-foreground))'
			},
			tooltip: {
				DEFAULT: 'hsl(var(--tooltip-background))',
				foreground: 'hsl(var(--tooltip-foreground))'
			},
			alert: {
				DEFAULT: 'hsl(var(--alert-background))',
				foreground: 'hsl(var(--alert-foreground))'
			},
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
		spacing: {
			xs: '4px',
			sm: '8px',
			md: '16px',
			lg: '24px',
			xl: '32px',
		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		},
		transitionTimingFunction: {
			DEFAULT: 'var(--transition, ease-in-out)'
		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}