<script>
import UnitsConverter from '../../components/UnitsConverter.vue';

export default {
    data() {
        return {
            heading: "Pressure Converter",
            units: ['b', 'Kb', 'Mb', 'Gb', 'Tb', 'B', 'KB', 'MB', 'GB', 'TB'],
            unitsText: ['Bit', 'Kilobit', 'Megabit', 'Gigabit', 'Terabit', 'Byte', 'KiloByte', 'MegaByte', 'GigaByte', 'TeraByte'],
            fromSelected: 'GB',
            toSelected: 'MB'
        };
    },
    components: { UnitsConverter }
}
</script>

<template>
    <UnitsConverter :heading="heading" :units="units" :unitsText="unitsText" :fromSelect="fromSelected" :toSelect="toSelected"/>
</template>