// plugin.js
// jQuery plugin definition

import $ from "jquery";
import GraphvizSvg from "./graphvizsvg";

function Plugin(option) {
  return this.each(function () {
    const $this = $(this);
    let data = $this.data("graphviz.svg");
    const options = typeof option === "object" && option;

    try {
      // Check for destroy call on non-existent instance
      if (!data && /destroy/.test(option)) return;

      // Initialize new instance
      if (!data) {
        try {
          data = new GraphvizSvg(this, options);
          $this.data("graphviz.svg", data);
        } catch (initError) {
          console.error("GraphvizSvg: Failed to initialize:", initError);
          // Clean up any partial initialization
          $this.removeData("graphviz.svg");
          throw initError;
        }
      }

      // Handle method calls
      if (typeof option === "string") {
        if (typeof data[option] !== "function") {
          throw new Error(`GraphvizSvg: Method '${option}' does not exist`);
        }
        data[option]();
      }
    } catch (error) {
      console.error("GraphvizSvg plugin error:", error);
      // Re-throw error to maintain existing behavior
      throw error;
    }
  });
}

const old = $.fn.graphviz;

$.fn.graphviz = Plugin;
$.fn.graphviz.Constructor = GraphvizSvg;

// No conflict
$.fn.graphviz.noConflict = function () {
  $.fn.graphviz = old;
  return this;
};
