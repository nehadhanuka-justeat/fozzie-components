export default {
    name: 'FlagIeIcon',

    props: {
    },

    functional: true,

    render (h, ctx) {
        const attrs = ctx.data.attrs || {};
        ctx.data.attrs = attrs;

        return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" class="c-ficon c-ficon--flag.ie" {...ctx.data}><g fill-rule="evenodd" stroke-width="1pt"><path fill="#fff" d="M0 0h639.995v480.004H0z"></path><path fill="#009A49" d="M0 0h213.334v480.004H0z"></path><path fill="#FF7900" d="M426.668 0h213.334v480.004H426.668z"></path></g></svg>;
    }
};
