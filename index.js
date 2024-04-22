export default function remixiconCapsule() {
  /**
   * Default options.
   * https://mojocss.com/docs/config/capsules#options
   */
  let defaultOptions = {
    version: "latest",
  };

  // Override default options if provided
  let options = { ...defaultOptions, ...this.options };

  /**
   * Import the remixicon font-face.
   * https://mojocss.com/docs/config/capsules#setconfigobject
   */
  this.setConfig({
    base: {
      fonts: {
        remixicon: {
          remixicon: "https://cdn.jsdelivr.net/npm/remixicon@"+ options.version +"/fonts/remixicon.min.css",
        },
      },
    },
  });
}
