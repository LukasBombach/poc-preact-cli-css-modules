import PropTypes from 'prop-types';

export function rendersPlatforms(WrappedComponent) {

  const defaultPlatform = 'Web';

  return class extends WrappedComponent {

    static contextTypes = {
      platform: PropTypes.string
    };

    getPlatform() {
      const platform = this.context.platform || defaultPlatform;
      return platform.charAt(0).toUpperCase() + platform.slice(1).toLowerCase();
    }

    render() {
      const platform = this.getPlatform();
      const renderMethod = this[`render${platform}`] ? `render${platform}` : `render${defaultPlatform}`;
      return this[renderMethod]();
    }

  };
}