import sys

def main():
    project_link=sys.argv[1]
    doc_home=sys.argv[2]
    if("Validation success!" in project_link):
        print(project_link) 
    elif("Validation success!" in project_link):
        print(doc_home)
    else:
        msg_list=doc_home.splitlines()
        penult_msg_list = list(dict.fromkeys(msg_list))
        final_msg_list = [x for x in penult_msg_list if "is not a map" not in x]

        removal_necessary = False
        for i in final_msg_list:
            if "is not a valid SPDX identifier" in i:
                removal_necessary = True
        
        if(removal_necessary):
            for j in final_msg_list:
                print(j)
        else:
            for k in penult_msg_list:
                print(k)

main()