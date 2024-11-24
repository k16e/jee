import { atom } from 'nanostores'
import { persistentAtom } from '@nanostores/persistent'

export const
    _awards = atom([]),
    _insights = atom([]),
    _events = atom([]),
    _people = atom([]),
    _designations = atom([]),
    _offices = atom([]),
    _sectors = atom([]),
    _practices = atom([]),
    _africaPractices = atom([]),
    _categories = atom([]),
    _newsletter = persistentAtom('newsletter', ''),
    _settings = persistentAtom('settings', ''),
    _overlay = atom(false)


export function _addAwards(item) { _awards.set(item) }
export function _addInsights(item) { _insights.set(item) }
export function _addEvents(item) { _events.set(item) }
export function _addPeople(item) { _people.set(item) }
export function _addDesignations(item) { _designations.set(item) }
export function _addOffices(item) { _offices.set(item) }
export function _addSectors(item) { _sectors.set(item) }
export function _addPractices(item) { _practices.set(item) }
export function _addAfricaPractices(item) { _africaPractices.set(item) }
export function _addCategories(item) { _categories.set(item) }
export function _addNewsletter(item) { _newsletter.set(item) }
export function _addSettings(item) { _settings.set(item) }

export function _setOverlay() { _overlay.set(true) }
export function _unsetOverlay() { _overlay.set(false) }