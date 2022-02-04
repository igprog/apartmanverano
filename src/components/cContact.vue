<template>
  <div>
    <label v-if="info.company" class="text-uppercase">{{ info.company }}</label>
    <div><icon v-if="showIcon" name="home" scale=2 class="text-main" />
      <div class="pb-1">
        <span class="p-2">{{ info.address }}</span>
      </div>
      <div class="pb-1">
        <span class="p-2">{{ `${info.postalCode} ${info.city}` }}</span>
      </div>
      <div class="pb-1">
        <span class="p-2">{{ $t(info.country) }}</span>
      </div>
    </div>
    <div class="pt-4 pb-1">
      <icon v-if="showIcon" name="phone" scale=2 class="text-main" /><span class="p-2">{{ info.phone }}</span>
    </div>
    <div class="pb-1">
      <icon v-if="showIcon" name="envelope" scale=2 class="text-main" /><span class="p-2">{{ info.email }}</span>
    </div>
    <div class="pb-1">
      <icon v-if="showIcon" name="globe" scale=2 class="text-main" /><span class="p-2">www.{{ info.appDomain }}</span>
    </div>
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
