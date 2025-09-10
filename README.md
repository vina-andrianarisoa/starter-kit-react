# Starter Kit React Pro / Professional React Starter Kit

Un starter kit moderne pour **React + TypeScript + Tailwind v3 + React Router**.  
A modern starter kit for **React + TypeScript + Tailwind v3 + React Router**.

## Stack utilisée / Tech Stack

- React 18 + TypeScript  
- Tailwind CSS v3  
- React Router DOM (createBrowserRouter)  
- Zustand (gestion d’état / state management)  
- Framer Motion (animations)  
- React Hook Form + Zod (formulaires et validation / forms and validation)  
- React Hot Toast (notifications)

## Structure du projet / Project Structure

src/components/ 
# Composants réutilisables / Reusable components
- Layout.tsx 
# Layout principal avec Header/Footer et <Outlet /> / Main layout with Header/Footer and <Outlet />
- Header.tsx # Composant Header / Header component
- Footer.tsx # Composant Footer / Footer component
pages/ 
# Pages pour chaque route / Pages for each route
- Home.tsx
- About.tsx
- Contact.tsx
# Configuration du router / Router configuration
- router.tsx 
- App.tsx
- main.tsx
# Styles globaux et imports Tailwind / Global styles with Tailwind imports
styles/
- index.css 

## Usage / Usage

Les routes sont gérées via createBrowserRouter et <Outlet />.
Routes are handled via createBrowserRouter and <Outlet />.

Le Layout contient Header et Footer réutilisables.
The Layout contains reusable Header and Footer components.

Ajouter de nouvelles pages dans src/pages et les connecter dans router.tsx.
Add new pages in src/pages and connect them in router.tsx.

Tailwind CSS est prêt à être utilisé dans tes composants.
Tailwind CSS is ready to use in your components.

## Scripts utiles / Useful scripts

- npm run dev      # Lancer le serveur de dev / Start dev server
- npm run build    # Construire le projet pour la production / Build project for production
- npm run preview  # Tester la build locale / Preview local build

## Conventions / Conventions

- Components / Composants → réutilisables et modulaires dans src/components

- Pages → chaque route a sa page dédiée dans src/pages

- Styles / Styles → Tailwind dans src/styles/index.css, classes utilitaires dans composants

- Git commits → suivre la convention Conventional Commits

## Notes / Notes

Starter kit conçu pour être scalable et facile à personnaliser.
Starter kit designed to be scalable and easy to customize.

Possibilité de créer plusieurs layouts (ex: public/admin) en ajoutant de nouveaux composants Layout.
You can create multiple layouts (e.g., public/admin) by adding new Layout components.

Toutes les dépendances de base sont installées et prêtes à l’emploi.
All core dependencies are installed and ready to use.