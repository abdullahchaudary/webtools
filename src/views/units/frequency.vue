<script>
import UnitsConverter from '../../components/UnitsConverter.vue';

export default {
    data() {
        return {
            heading: "Frequency Converter",
            units: ['Hz', 'mHz', 'kHz', 'MHz', 'GHz', 'THz', 'rpm', 'deg/s', 'rad/s'],
            unitsText: ['Hertz', 'Millihertz', 'Kilohertz', 'Megahertz', 'Gigahertz', 'Terahertz', 'Revolutions/min', 'Degree/sec', 'Radian/sec'],
            fromSelected: 'kHz',
            toSelected: 'Hz'
        };
    },
    components: { UnitsConverter }
}
</script>

<template>
    <UnitsConverter :heading="heading" :units="units" :unitsText="unitsText" :fromSelect="fromSelected" :toSelect="toSelected"/>
</template>