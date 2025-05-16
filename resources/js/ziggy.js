// resources/js/ziggy.js
import { Ziggy } from './ziggy-generated'; // Laravel 10+
import route from 'ziggy-js';

export default (name, params, absolute) => route(name, params, absolute, Ziggy);