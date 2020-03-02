import { Component, Prop, h, Listen, Element } from "@stencil/core";

@Component({
  tag: "x-tooltip",
  styleUrl: "x-tooltip.css",
  shadow: true
})
export class XTooltip {
  @Element() private element: HTMLElement;

  @Prop() text: string;

  tooltip: HTMLElement;

  @Listen("mouseenter")
  showTooltip() {
    this.tooltip = document.createElement("div");
    this.tooltip.textContent = this.text;
    this.element.shadowRoot.appendChild(this.tooltip);
  }

  @Listen("mouseleave")
  hideTooltip() {
    this.element.shadowRoot.removeChild(this.tooltip);
  }

  render() {
    return [<slot></slot>, <span> (?)</span>];
  }
}
