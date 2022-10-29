<script>
import UnitsConverter from '../../components/UnitsConverter.vue';

export default {
    data() {
        return {
            heading: "Volume Converter",
            fromSelected: 'mm3',
            toSelected: 'l',
            units: ['mm3', 'cm3', 'ml', 'l', 'kl', 'Ml', 'Gl', 'm3', 'km3', 'tsp', 'Tbs', 'in3', 'fl-oz', 'cup', 'pnt', 'qt', 'gal', 'ft3', 'yd3'],
            unitsText: ['Cubic millimeter', 'Cubic centimeter', 'Milliliter', 'Litre', 'Kiloliter', 'Megaliter', 'Gigaliter', 'Cubic meter', 'Cubic kilometer', 'Teaspoon', 'Tablespoon', 'Cubic inch', 'Fluid ounce', 'Cup', 'Pint', 'Quart', 'Gallon', 'Cubic foot', 'Cubic yard'],
        };
    },
    components: { UnitsConverter }
}
</script>

<template>
    <UnitsConverter :heading="heading" :units="units" :unitsText="unitsText" :fromSelect="fromSelected" :toSelect="toSelected"/>
</template>