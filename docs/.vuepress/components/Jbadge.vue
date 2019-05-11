<template>
   <span>
     <Badge text="JS" type="tip" v-if="js"/>
     <Badge text="JSON" type="warn" v-if="json"/>
     <Bagde text="Optional" type="error" v-if="opt"/>
   </span>
</template>
<script>
export default {
  props: {
    js: {
      type: Boolean,
      default: true
    },
    json: {
      type: Boolean,
      default: true
    },
    opt: {
      type: Boolean,
      default: false
    }
  }
}
</script>
