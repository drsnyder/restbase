"use strict";

// Simplistic static backend handler
//
// Primarily useful for baseline performance measurements of front-end
// handlers & the dispatcher machinery.
function handleAll (env, req) {
    //yield requestPr(req);
    return Promise.resolve({
        body: 'Hello World!',
        status: 200
    });
}

// Register handler for end point
module.exports = {
    routes: [
        {
            path: '/v1/helloworld',
            methods: {
                ALL: {
                    handler: handleAll,
                    doc: { /* swagger docs */
                        "summary": "Mock 'hello world' handler for benchmarking purposes.",
                        "notes": "Useful for measuring the overhead of the restface stack"
                    }
                }
            }
        }
    ]
};
