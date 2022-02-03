<template>
  <div>
    <label class="text-uppercase">{{ info.company }}</label>
    <p><icon v-if="showIcon" name="home" /><span class="pl-2">{{ `${info.address}, ${info.postalCode} ${info.city}, ${$t(info.country)}` }}</span></p>
    <p><icon v-if="showIcon" name="phone" /><span class="pl-2">{{ info.phone }}</span></p>
    <p><icon v-if="showIcon" name="envelope" /><span class="pl-2">{{ info.email }}</span></p>
    <p><icon v-if="showIcon" name="globe" /><span class="pl-2">www.{{ info.appDomain }}</span></p>
  </div>
</template>

<script>
import { info } from "../config/info";
export default {
  props: {
    showIcon: Boolean
  },
  data() {
    return {
      info
    };
  },
};
</script>
