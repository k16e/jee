const
    _body = () => document.body,
    _q = (selector, parent) => (parent ? parent : document).querySelector(selector),
    _ql = (selector, parent) => Array.from((parent ? parent : document).querySelectorAll(selector)),
    _even = n => n % 2 == 0,
    _odd = n => Math.abs(n % 2) == 1,
    _capitalize = str => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase(),
    _sectionPadding = (direction = 'top') => {
        if (direction === 'top') return new Array('pt-8', 'md:pt-14', 'lg:pt-20')
        if (direction === 'bottom') return new Array('pb-8', 'md:pb-14', 'lg:pb-20')
        if (direction === 'both') return new Array('py-8', 'md:py-14', 'lg:py-20')
    },
    _xPadding = (edges = 'both') => {
        if (edges === 'both') return new Array('px-3', 'md:px-8', 'lg:px-16')
    },
    _gridGap = (direction = 'y') => {
        if (direction === 'y') return new Array('gap-y-8', 'md:gap-y-14', 'lg:gap-y-20')
    }

export {
    _body, _q, _ql, _even, _odd, _capitalize, _sectionPadding, _gridGap, _xPadding
}