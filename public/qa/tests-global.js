suite('Global Tests', function() {
    test('This page has valid title', function() {
        assert(document.title && document.title.match(/\S/) &&
            document.title.toUpperCase() !== 'TODO');
    });
});
