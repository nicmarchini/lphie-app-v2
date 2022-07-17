aws dynamodb create-table  \
    --table-name Classes \
    --attribute-definitions \
        AttributeName=ClassLetter,AttributeType=S \
    --key-schema AttributeName=ClassLetter,KeyType=HASH \
    --provisioned-throughput ReadCapacityUnits=1,WriteCapacityUnits=1 \
    --table-class STANDARD \
    --endpoint-url http://localhost:8000

aws dynamodb create-table  \
    --table-name Brothers \
    --attribute-definitions \
        AttributeName=BrotherNumber,AttributeType=N \
    --key-schema AttributeName=BrotherNumber,KeyType=HASH \
    --provisioned-throughput ReadCapacityUnits=1,WriteCapacityUnits=1 \
    --table-class STANDARD \
    --endpoint-url http://localhost:8000

# aws dynamodb list-tables --endpoint-url http://localhost:8000


# aws dynamodb put-item \
#     --table-name Classes \
#     --item \
#         '{"ClassLetter": {"S": "Alpha"}, "ContainedBroIDs": {"L": [ {"N": "10"}, {"N": "11"}, {"N": "12"}, {"N": "13"}, {"N": "14"} ] }}' \
#     --return-consumed-capacity TOTAL  \
#     --endpoint-url http://localhost:8000

# aws dynamodb put-item \
#     --table-name Classes \
#     --item \
#         '{"ClassLetter": {"S": "Beta"}, "ContainedBroIDs": {"L": []}}' \
#     --return-consumed-capacity TOTAL  \
#     --endpoint-url http://localhost:8000

aws dynamodb put-item \
    --table-name Brothers \
    --item \
        '{  "BrotherNumber": {"N": "10"}, 
            "BrotherName": {"S": "Kyle Rojo"},
            "BrotherNickname": {"S": "Shell Shock"},
            "BrotherStatus": {"S": "Alumni"} }' \
    --return-consumed-capacity TOTAL  \
    --endpoint-url http://localhost:8000

# aws dynamodb put-item \
#     --table-name Brothers \
#     --item \
#         '{  "BrotherNumber": {"N": "11"}, 
#             "BrotherName": {"S": "Alex Phelps"},
#             "BrotherNickname": {"S": "Don Solo"},
#             "BrotherStatus": {"S": "Alumni"} }' \
#     --return-consumed-capacity TOTAL  \
#     --endpoint-url http://localhost:8000

# aws dynamodb put-item \
#     --table-name Brothers \
#     --item \
#         '{  "BrotherNumber": {"N": "12"}, 
#             "BrotherName": {"S": "Raven Soppityboppity"},
#             "BrotherNickname": {"S": "All Star"},
#             "BrotherStatus": {"S": "Alumni"} }' \
#     --return-consumed-capacity TOTAL  \
#     --endpoint-url http://localhost:8000

# aws dynamodb put-item \
#     --table-name Brothers \
#     --item \
#         '{  "BrotherNumber": {"N": "13"}, 
#             "BrotherName": {"S": "Derek Pang"},
#             "BrotherNickname": {"S": "Spectre"},
#             "BrotherStatus": {"S": "Alumni"} }' \
#     --return-consumed-capacity TOTAL  \
#     --endpoint-url http://localhost:8000

# aws dynamodb put-item \
#     --table-name Brothers \
#     --item \
#         '{  "BrotherNumber": {"N": "14"}, 
#             "BrotherName": {"S": "Agean Binan"},
#             "BrotherNickname": {"S": "Kodiak"},
#             "BrotherStatus": {"S": "Alumni"} }' \
#     --return-consumed-capacity TOTAL  \
#     --endpoint-url http://localhost:8000



# # aws dynamodb query --table-name Classes \
# #                    --key-condition-expression "ClassName = :s" \
# #                    --expression-attribute-values \
# #                     "{ \":s\" : { \"S\" : \"Alphas\" } }" \
# #                    --endpoint-url http://localhost:8000

# # aws dynamodb query --table-name Classes \
# #                    --key-condition-expression "ClassName = :s" \
# #                    --expression-attribute-values \
# #                     "{ \":s\" : { \"S\" : \"Betas\" } }" \
# #                    --endpoint-url http://localhost:8000

# aws dynamodb query --table-name Brothers \
#                    --key-condition-expression "BrotherNumber = :n" \
#                    --expression-attribute-values \
#                     "{ \":n\" : { \"N\" : \"10\" } }" \
#                    --endpoint-url http://localhost:8000