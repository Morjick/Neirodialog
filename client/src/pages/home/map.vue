<template>
  <div class="map">
    <MglMap 
      :accessToken="accessToken" 
      :mapStyle="mapStyle" 
      @load="onMapLoaded"
    />
    <MglMarker :coordinates="coordinates" color="blue" />
  </div>
</template>

<script>
import Mapbox from "mapbox-gl"
import { MglMap, MglMarker  } from "vue-mapbox"

export default {
  name: 'Map',
  data() {
    return {
      accessToken: "pk.eyJ1IjoibW9yamljayIsImEiOiJja3NidWF0ajUwYWk1MndwZmk3c290czhyIn0.-QX4ZH14vyOVyO-2cCPh_w",
      mapStyle: 'mapbox://styles/mapbox/streets-v11'
    }
  },
  components: { MglMap, MglMarker  },
  created() {
    this.mapbox = Mapbox
  },
  methods: {
    async onMapLoaded(event) {
      const asyncActions = event.component.actions

      const newParams = await asyncActions.flyTo({
        center: [32.0248, 54.8107],
        zoom: 16,
        speed: 1
      })
      console.log(newParams)
    }
  }
}
</script>