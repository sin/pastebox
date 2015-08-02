define(['jquery', 'underscore', 'backbone', 'marionette', 'global',
        'apps/snippets/snippets-view-item',
        'text!templates/snippets-list.html'],
    function ($, _, Backbone, Marionette, app, ChildView, template) {

        return Marionette.CompositeView.extend({
            template: template,
            childView: ChildView,
            childViewContainer: '.snippets-list',

            events: {
                'click .sort': 'fetchSortedBy',
                'click .filter': 'fetchFiltered'
            },

            initialize: function (options) {
                if (options.state) {
                    this.state = options.state;
                } else {
                    this.state = {
                        sortBy: 'created',
                        sortOrder: 0
                    };
                }
            },

            serializeData: function () {
                var s = this.state,
                    userID = app.getUser()._id;

                return {
                    created: s.sortBy === 'created',
                    updated: s.sortBy === 'updated',
                    title: s.sortBy === 'title',
                    author: s.sortBy === 'author',
                    desc: s.sortOrder,
                    all: s.filter == null,
                    mine: (s.filter === userID && s.filterInvert === false),
                    others: (s.filter === userID && s.filterInvert === true),
                    filtering: (s.filter === userID || s.filter == null)
                };
            },

            fetchFiltered: function (event) {
                var selectedOption = $(event.target).data('filter'),
                    userID = app.getUser()._id;

                switch (selectedOption) {
                    case 'all':
                        this.state.filterBy = null;
                        this.state.filter = null;
                        this.state.filterInvert = null;
                        break;
                    case 'mine':
                        this.state.filterBy = 'user';
                        this.state.filter = userID;
                        this.state.filterInvert = false;
                        break;
                    case 'other':
                        this.state.filterBy = 'user';
                        this.state.filter = userID;
                        this.state.filterInvert = true;
                        break;
                }

                this.collection.fetch({data: $.param(this.state)});
                this.render();

                event.preventDefault();
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
