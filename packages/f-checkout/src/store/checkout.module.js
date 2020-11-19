import axios from 'axios';

export default {
    namespaced: true,

    state: () => ({
        id: '',
        serviceType: '',
        customer: {
            firstName: '',
            mobileNumber: ''
        },
        fulfillment: {
            times: [],
            address: {
                line1: '',
                line2: '',
                city: '',
                postcode: ''
            }
        },
        notes: [],
        isFulfillable: true,
        notices: [],
        messages: []
    }),

    actions: {
        getCheckoutDetails: async ({ commit }, payload) => {
            // TODO: deal with exceptions.

            const { url, tenant, timeout } = payload;

            const config = {
                method: 'get',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept-Tenant': tenant
                },
                timeout
            };

            const { data } = await axios.get(url, config);

            commit('setCheckoutDetails', data);
        }
    },

    mutations: {
        setCheckoutDetails: (state, {
            id,
            serviceType,
            customer,
            fulfillment,
            notes,
            isFulfillable,
            notices,
            messages
        }) => {
            state.id = id;
            state.serviceType = serviceType;

            if (customer) {
                state.customer.firstName = customer.firstName;
                state.customer.mobileNumber = customer.phoneNumber;
            }

            state.fulfillment.times = fulfillment.times;

            if (fulfillment.address) {
                /* eslint-disable prefer-destructuring */
                state.fulfillment.address.line1 = fulfillment.address.lines[0];
                state.fulfillment.address.line2 = fulfillment.address.lines[1];
                state.fulfillment.address.city = fulfillment.address.lines[3];
                /* eslint-enable prefer-destructuring */

                state.fulfillment.address.postcode = fulfillment.address.postalCode;
            }

            state.notes = notes;
            state.isFulfillable = isFulfillable;
            state.notices = notices;
            state.messages = messages;
        }
    }
};