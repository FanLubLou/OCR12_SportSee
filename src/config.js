/**
 * @file config.js
 * @description Fichier de configuration pour gérer la source des données dans l'application.
 * @module config
 */

/**
 * Indique si les données mockées doivent être utilisées plutôt que les données du backend.
 * 
 * Lorsque `USE_MOCK_DATA` est défini sur `true`, l'application utilise les données mockées pour les 
 * utilisateurs et les autres données. Lorsque `USE_MOCK_DATA` est défini sur `false`, l'application
 * récupère les données directement depuis le backend via les services API.
 * 
 * @type {boolean}
 * @default false
 * @example
 * // Utiliser les données du backend
 * export const USE_MOCK_DATA = false;
 * 
 * // Utiliser les données mockées
 * export const USE_MOCK_DATA = true;
 */

export const USE_MOCK_DATA = false; 
