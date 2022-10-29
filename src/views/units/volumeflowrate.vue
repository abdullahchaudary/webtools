<script>
import UnitsConverter from '../../components/UnitsConverter.vue';

export default {
    data() {
        return {
            heading: "Volume Flow Rate Converter",
            units: ["mm3/s", "cm3/s", "ml/s", "cl/s", "dl/s", "l/s", "l/min", "l/h", "kl/s", "kl/min", "kl/h", "m3/s", "m3/min", "m3/h", "km3/s", "tsp/s", "Tbs/s", "in3/s", "in3/min", "in3/h", "fl-oz/s", "fl-oz/min", "fl-oz/h", "cup/s", "pnt/s", "pnt/min", "pnt/h", "qt/s", "gal/s", "gal/min", "gal/h", "ft3/s", "ft3/min", "ft3/h", "yd3/s", "yd3/min", "yd3/h"],
            unitsText: ["Cubic Millimeters/sec", "Cubic Centimeter/sec", "Milliliter/sec", "Centiliter/sec", "Deciliter/sec", "Liter/sec", "Liter/min", "Liter/hour", "Kiloliters/sec", "Kiloliters/min", "Kiloliters/hour", "Cubic meter/sec", "Cubic meter3/min", "Cubic meter3/hour", "Cubic kilometers/sec", "Teaspoon/sec", "Tablespoon/sec", "Cubic Inch/sec", "Cubic Inch/min", "Cubic Inch/hour", "Fluid ounce/sec", "Fluid ounce/min", "Fluid ounce/hour", "Cup/sec", "Pint/sec", "Pint/min", "Pint/hour", "Quart/sec", "Gallon/sec", "Gallon/min", "Gallon/hour", "Cubic foot/sec", "Cubic foot/min", "Cubic foot/hour", "Cubic yard/sec", "Cubic yard/min", "Cubic yard/hour"],
            fromSelected: 'cm3/s',
            toSelected: 'mm3/s'
        };
    },
    components: { UnitsConverter }
}
</script>

<template>
    <UnitsConverter :heading="heading" :units="units" :unitsText="unitsText" :fromSelect="fromSelected" :toSelect="toSelected"/>
</template>