import {initConfig} from "./config.js";
import { registerSettings } from "./settings.js";

export const MODULE_ID = "enhancedcombathud-dnd5e";

Hooks.on("init", () => {
    CONFIG.DND5E.abilityActivationTypes['support'] = "Support Action";
    CONFIG.DND5E.abilityActivationTypes['stamina'] = "Stamina Action";
});

Hooks.on("setup", () => {
    registerSettings();
    initConfig();
});