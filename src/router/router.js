import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'

import md5 from '../views/crypto/md5.vue'
import sha1 from '../views/crypto/sha1.vue'
import sha256 from '../views/crypto/sha256.vue'
import sha512 from '../views/crypto/sha512.vue'
import sha3 from '../views/crypto/sha3.vue'
import ripemd160 from '../views/crypto/ripemd160.vue'
import pbkdf2 from '../views/crypto/pbkdf2.vue'

//Ciphers
import aes from '../views/ciphers/aes.vue'
import des from '../views/ciphers/des.vue'
import tripledes from '../views/ciphers/tripledes.vue'
import rabbit from '../views/ciphers/rabbit.vue'
import rc4 from '../views/ciphers/rc4.vue'
import rc4drop from '../views/ciphers/rc4drop.vue'

//Units
import length from '../views/units/length.vue'
import area from '../views/units/area.vue'
import angle from '../views/units/angle.vue'
import mass from '../views/units/mass.vue'
import volume from '../views/units/volume.vue'
import volumeflowrate from '../views/units/volumeflowrate.vue'
import temperature from '../views/units/temperature.vue'
import time from '../views/units/time.vue'
import frequency from '../views/units/frequency.vue'
import speed from '../views/units/speed.vue'
import pace from '../views/units/pace.vue'
import pressure from '../views/units/pressure.vue'
import digitalsize from '../views/units/digitalsize.vue'
import illuminance from '../views/units/illuminance.vue'
import partsper from '../views/units/partsper.vue'
import voltage from '../views/units/voltage.vue'
import current from '../views/units/current.vue'
import power from '../views/units/power.vue'
import apparentpower from '../views/units/apparent-power.vue'
import reactivepower from '../views/units/reactive-power.vue'
import energy from '../views/units/energy.vue'
import reactiveenergy from '../views/units/reactive-energy.vue'
import charge from '../views/units/charge.vue'
import force from '../views/units/force.vue'
import acceleration from '../views/units/acceleration.vue'
import quantity from '../views/units/quantity.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: 'nav-active',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/crypto/MD5-generator',
      name: 'MD5-generator',
      component: md5
    },
    {
      path: '/crypto/SHA1-generator',
      name: 'SHA1-generator',
      component: sha1
    },
    {
      path: '/crypto/SHA256-generator',
      name: 'SHA256-generator',
      component: sha256
    },
    {
      path: '/crypto/SHA512-generator',
      name: 'SHA512-generator',
      component: sha512
    },
    {
      path: '/crypto/SHA3-generator',
      name: 'SHA3-generator',
      component: sha3
    },
    {
      path: '/crypto/RIPEMD160-generator',
      name: 'RIPEMD160-generator',
      component: ripemd160
    },
    {
      path: '/crypto/PBKDF2-generator',
      name: 'PBKDF2-generator',
      component: pbkdf2
    },

    //Ciphers
    {
      path: '/ciphers/aes-encrypt-decrypt',
      name: 'aes-encrypt-decrypt',
      component: aes
    },
    {
      path: '/ciphers/des-encrypt-decrypt',
      name: 'des-encrypt-decrypt',
      component: des
    },
    {
      path: '/ciphers/tripledes-encrypt-decrypt',
      name: 'tripledes-encrypt-decrypt',
      component: tripledes
    },
    {
      path: '/ciphers/rabbit-encrypt-decrypt',
      name: 'rabbit-encrypt-decrypt',
      component: rabbit
    },
    {
      path: '/ciphers/rc4-encrypt-decrypt',
      name: 'rc4-encrypt-decrypt',
      component: rc4
    },
    {
      path: '/ciphers/rc4drop-encrypt-decrypt',
      name: 'rc4drop-encrypt-decrypt',
      component: rc4drop
    },
    
    //Units
    {
      path: '/unit-converter/length',
      name: 'unit-length',
      component: length
    },
    {
      path: '/unit-converter/area',
      name: 'unit-area',
      component: area
    },
    {
      path: '/unit-converter/angle',
      name: 'unit-angle',
      component: angle
    },
    {
      path: '/unit-converter/force',
      name: 'unit-force',
      component: force
    },
    {
      path: '/unit-converter/mass',
      name: 'unit-mass',
      component: mass
    },
    {
      path: '/unit-converter/volume',
      name: 'unit-volume',
      component: volume
    },
    {
      path: '/unit-converter/volume-flow-rate',
      name: 'unit-volume-flow-rate',
      component: volumeflowrate
    },
    {
      path: '/unit-converter/temperature',
      name: 'unit-temperature',
      component: temperature
    },
    {
      path: '/unit-converter/time',
      name: 'unit-time',
      component: time
    },
    {
      path: '/unit-converter/frequency',
      name: 'unit-frequency',
      component: frequency
    },
    {
      path: '/unit-converter/speed',
      name: 'unit-speed',
      component: speed
    },
    {
      path: '/unit-converter/acceleration',
      name: 'unit-acceleration',
      component: acceleration
    },
    {
      path: '/unit-converter/pace',
      name: 'unit-pace',
      component: pace
    },
    {
      path: '/unit-converter/pressure',
      name: 'unit-pressure',
      component: pressure
    },
    {
      path: '/unit-converter/digital-size',
      name: 'unit-digitalsize',
      component: digitalsize
    },
    {
      path: '/unit-converter/illuminance',
      name: 'unit-illuminance',
      component: illuminance
    },
    {
      path: '/unit-converter/parts-per',
      name: 'unit-partsper',
      component: partsper
    },
    {
      path: '/unit-converter/quantity',
      name: 'unit-quantity',
      component: quantity
    },
    {
      path: '/unit-converter/voltage',
      name: 'unit-voltage',
      component: voltage
    },
    {
      path: '/unit-converter/current',
      name: 'unit-current',
      component: current
    },
    {
      path: '/unit-converter/power',
      name: 'unit-power',
      component: power
    },
    {
      path: '/unit-converter/apparent-power',
      name: 'unit-apparent-power',
      component: apparentpower
    },
    {
      path: '/unit-converter/reactive-power',
      name: 'unit-reactive-power',
      component: reactivepower
    },
    {
      path: '/unit-converter/energy',
      name: 'unit-energy',
      component: energy
    },
    {
      path: '/unit-converter/reactive-energy',
      name: 'unit-reactive-energy',
      component: reactiveenergy
    },
    {
      path: '/unit-converter/charge',
      name: 'unit-charge',
      component: charge
    },

    // {
    //   path: '/about',
    //   name: 'about',
    //   component: AboutView
    // }
  ]
})

export default router
