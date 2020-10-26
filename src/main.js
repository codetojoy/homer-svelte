import App from "./App.svelte";

/*
<script type="text/javascript" src="resources/jquery/jquery-1.6.3.min.js"></script>
    <script type="text/javascript" src="resources/jquery/js/jquery-ui-1.8.16.custom.min.js"></script>
    <link rel="stylesheet" href="resources/jquery/js/css/cupertino/jquery-ui-1.8.16.custom.css"></link>
*/

const app = new App({
  target: document.body,
  props: {
    name: "homer",
  },
});

export default app;
