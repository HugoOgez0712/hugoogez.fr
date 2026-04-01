# hugoogez.fr — Portfolio Hugo Ogez

Site web personnel de Hugo Ogez, chargé de marketing digital spécialisé SEO et GEO, basé dans le bassin rennais.

## Structure du projet

```
mon-site/
├── index.html        # Page d'accueil — schema Person complet
├── cv.html           # CV web sémantique
├── portfolio.html    # Fiches projets
├── geo.html          # Article de fond sur le GEO
├── contact.html      # Page contact — formulaire Netlify-compatible
├── style.css         # Feuille de styles commune (CSS custom properties)
├── sitemap.xml       # Plan du site — à soumettre dans Search Console
├── robots.txt        # Instructions pour les crawlers
└── README.md         # Ce fichier
```

## Stack technique

- HTML5 sémantique — zéro framework
- CSS custom properties — zéro Google Fonts, zéro Bootstrap
- JavaScript minimal — menu mobile uniquement (~10 lignes)
- Données structurées JSON-LD (schema.org) sur chaque page
- Hébergeable sur GitHub Pages sans configuration

## Déploiement sur GitHub Pages

1. Pousser le dossier sur un repo GitHub (ex: `HugoOgez0712/hugoogez.fr`)
2. Dans les Settings du repo → Pages → Source : `main` / `root`
3. Le site est accessible sur `https://hugoogez0712.github.io/hugoogez.fr/`
4. Pour le domaine personnalisé : ajouter un fichier `CNAME` contenant `hugoogez.fr`
5. Configurer les DNS chez le registrar (A records vers les IPs GitHub Pages)

## Ajouter un projet dans portfolio.html

Copier un bloc `<article class="projet">` existant, le coller avant le commentaire
`AJOUTER UN PROJET ICI`, puis mettre à jour le JSON-LD `ItemList` en tête de page.

## Mettre à jour le sitemap

Modifier la date `<lastmod>` de la page modifiée dans `sitemap.xml`,
puis soumettre à nouveau dans Google Search Console.
