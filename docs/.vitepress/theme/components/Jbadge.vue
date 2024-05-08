<template>
   <span>
     <Badge text="JS" type="tip" v-if="js"/>
     <Badge text="JSON" type="warning" v-if="json"/>
     <Badge text="Optional" type="danger" v-if="opt"/>
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
