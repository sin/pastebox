define(['jquery', 'underscore', 'backbone', 'marionette',
        'apps/snippets/snippets-view-item',
        'text!templates/snippets-list.html'],
    function ($, _, Backbone, Marionette, ChildView, template) {

        return Marionette.CompositeView.extend({
            template: template,
            childView: ChildView,
            childViewContainer: '.snippets-list',

            events: {
                'click .sort': 'fetchSortedBy'
            },

            initialize: function () {
                this.state = {
                    sortBy: 'created',
                    sortOrder: 0
                };
            },

            serializeData: function () {
                var s = this.state;
                return {
                    created: s.sortBy === 'created',
                    updated: s.sortBy === 'updated',
                    title: s.sortBy === 'title',
                    author: s.sortBy === 'author',
                    desc: s.sortOrder
                };
            },

            fetchSortedBy: function (event) {

                var sortBy = $(event.target).data('sort'),
                    sortOrder = this.state.sortOrder ? 0 : 1;

                this.state.sortBy = sortBy;
                this.state.sortOrder = sortOrder;

                this.collection.fetch({data: $.param(this.state)});
                this.render();

                event.preventDefault();
            }
        });

    });
