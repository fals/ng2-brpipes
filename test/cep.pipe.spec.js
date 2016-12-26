"use strict";
var cep_pipe_1 = require('../src/cep.pipe');
describe('CepPipe', function () {
    var pipe = new cep_pipe_1.CepPipe();
    it('transforms "72006226" to "72006-226"', function () {
        expect(pipe.transform('72006226')).toBe('72006-226');
    });
});
//# sourceMappingURL=cep.pipe.spec.js.map