suite('Page "About..." tests', function() {
    test('This page has to have link to contacts page', function() {
        assert($('a[href="/contact"]').length);
    });
});
