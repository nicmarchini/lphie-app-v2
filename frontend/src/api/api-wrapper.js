import {
    insert, 
    retrieve,
    list_tables,
    create_table
} from './api-lower.js';

const bro_table = "Brothers"
const class_table = "Classes"
const rcc = "TOTAL"

async function get_tables() {
    return await list_tables()
}

async function create_brothers_table() {
    
    const attr_defs = [{
        AttributeName:"BrotherNumber",
        AttributeType:"N"
    }]

    const throughput = {
        ReadCapacityUnits:1,
        WriteCapacityUnits:1
    }

    const schema = [{
        AttributeName: "BrotherNumber",
        KeyType: "HASH"
    }]

    return await create_table(bro_table, attr_defs, throughput, schema, 'STANDARD')
}

async function create_classes_table() {

    const attr_defs = [{
        AttributeName:"ClassLetter",
        AttributeType:"S"
    }]

    const throughput = {
        ReadCapacityUnits:1,
        WriteCapacityUnits:1
    }

    const schema = [{
        AttributeName: "ClassLetter",
        KeyType: "HASH"
    }]

    return await create_table(class_table, attr_defs, throughput, schema, 'STANDARD')
}

async function get_bro(bro_id) {
    const key_exp = "BrotherNumber = :n"
    const exp_vals = {":n" : {"N" : bro_id }}
    return await retrieve( bro_table, key_exp, exp_vals, rcc )
}

async function get_bro_ids_in_class(class_letter){
    const key_exp = "ClassLetter = :s"
    const exp_vals = {":s" : {"S" : class_letter }}
    return await retrieve(class_table, key_exp, exp_vals, rcc )
}

async function insert_bro( bro_id, bro_first, bro_last, bro_nickname,
                           bro_status, class_image_url, personal_imgs ){
    
    const personal_img_urls = []
    for (const url of personal_imgs){
        personal_img_urls.push({"S": url})
    }

    const item_obj = {
        "BrotherNumber": {"N": bro_id}, 
        "BrotherFirst": {"S": bro_first},
        "BrotherLast": {"S": bro_last},
        "BrotherNickname": {"S": bro_nickname},
        "BrotherStatus": {"S": bro_status},
        "ClassImage": {"S": class_image_url},
        "PersonalImages": {"L": personal_img_urls},
    } 

    return await insert(bro_table, item_obj, rcc)
}

// async function delete_bro(bro_id){
//     key_exp = "BrotherNumber = :n"
//     exp_vals = {":n" : {"N" : bro_id }}
//     return await delete( bro_table, key_exp, exp_vals, rcc )
// }

async function get_class(greek_letter){
    const key_exp = "ClassLetter = :s"
    const exp_vals = {":s" : {"S" : greek_letter }}
    return await retrieve( class_table, key_exp, exp_vals, rcc )
}

async function insert_class(
        class_letter,
        cross_date,
        class_pd_id,
        class_apd_ids,
        class_nickname,
        class_image,
        bro_ids
    ){

    let class_apd_ids_list = []
    for (let apd of class_apd_ids){
        class_apd_ids_list.push({"N": apd})
    }

    let bro_ids_list = []
    for (let bro_id of bro_ids){
        bro_ids_list.push({"N": bro_id})
    }

    const item_obj = {
        "ClassLetter": {"S": class_letter},
        "CrossDate": {"S": cross_date},
        "ClassPD": {"N": class_pd_id},
        "ClassAPDS": {"L": class_apd_ids_list},
        "ClassNickname": {"S": class_nickname},
        "ClassImage": {"S": class_image},
        "ClassBroIds": {"L": bro_ids_list}
    }

    console.log(item_obj)

    return await insert(class_table, item_obj, rcc)
}

// async function delete_class(class_letter){
//     key_exp = "ClassLetter = :s"
//     exp_vals = {":s" : {"S" : class_letter }}
//     return await delete( class_table, key_exp, exp_vals, rcc )
// }

export {
    insert_bro,
    // delete_bro,
    insert_class,
    // delete_class,
    get_bro,
    get_class,
    get_tables,
    create_brothers_table,
    create_classes_table,
    get_bro_ids_in_class
    // get_all_bros,
    // get_all_classes
}