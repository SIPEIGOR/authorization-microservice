export default class ShadowDomComponent extends React.Component {
  componentDidMount() {
    this.root = this.shadowHost.attachShadow({ mode: 'open' });
    this.root.appendChild(this.content);
  }

  render() {
    return (
      <div ref={(node) => (this.shadowHost = node)}>
        <div ref={(node) => (this.content = node)}>{this.props.children}</div>
      </div>
    );
  }
}
