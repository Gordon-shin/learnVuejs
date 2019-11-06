<template>
  <div style="margin: 24px">
    <p style="margin-bottom: 24px">
      Current ant-design-vue version: {{ version }} <br />
      You can change ant-design-vue version on the left panel (Dependencies
      section).
    </p>
    <a-date-picker :defaultValue="moment()" />
  </div>
</template>

<script>
    import moment from "moment";
    import { version } from "ant-design-vue/es";
    export default {
        name: "Timer",
        data() {
            return {
                moment,
                version
            };
        }
    };
</script>


