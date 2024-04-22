# Remix Icon for Mojo CSS

This capsule allows you to easily integrate RemixIcon, a popular icon library, into your [Mojo CSS](https://mojocss.com/) projects.
## Usage

#### NPM

1. Install the capsule package via npm:

```bash
npm install @mojocss/remixicon
```

2. Import the `remixiconCapsule` function from the installed package:

```javascript
import remixiconCapsule from "@mojocss/remixicon";
```

3. Add the capsule to your Mojo config:

```javascript
mojo({
  // Mojo CSS Config
  capsules: [remixiconCapsule],
});
```

Alternatively, you can configure specific options:

```javascript
mojo({
  // Mojo CSS Config
  capsules: [
    {
      capsule: remixiconCapsule,
      options: {
        version: "5.3.2", // remixicon version
      },
    },
  ],
});
```

#### CDN

```html
<script src="https://unpkg.com/@mojocss/remixicon"></script>
```

and then

```javascript
mojo({
  // Mojo CSS Config
  capsules: [remixiconCapsule],
});
```

## Usage

After importing the capsule, you can use its icons in your HTML markup:

```html
<i class="ri-heart-fill"></i>
```

## Additional Information

- **Remix Icon**: You can find detailed documentation and icons list on the [official RemixIcon website](https://remixicon.com/).
- **MojoCSS Capsules**: You can find more information about capsules on the [MojoCSS documentation](https://mojocss.com/docs/config/capsules).