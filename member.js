function skillMember() {
    // private
    var _name = 'private';

    // public
    this.publicName = 'public';

    this.setName = function (name) {
        _name = name;
    }

    this.getName = function () {
        return _name;
    }
}