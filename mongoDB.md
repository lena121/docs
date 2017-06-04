# Commands

* show dbs - dislay all databases
* db - display atcive database
* use _nameDB_ - create new db

### create collections (or tables in relational DB)
* db.createCollection("name")
* show collections

### insert documents into collections
* db._name_of_collection_.insert({})

### read documents from collection
* db._name_of_collection_.find() 

### update document in collection
* db._name_of_collection_.update({set_old_object}, {set_new_object});
* db_name_of_collection_.update({field_object}, {$set: {new_filed_object}});

### remove field from document
* db._name_of_collection_.update({set_field_object}, {$unset: {set_field_object}});

### remove document from collecton 
* db._name_of_collection.remove({set_field_object});

