function new_post {
    #change these 3 lines to match your specific setup
    GH_USER="phatcvo"
    PC_USER="post"
    POST_PATH="/Users/${PC_USER}/dsi-nyc-5/${GH_USER}.github.io/_posts"
    IMG_PATH="/Users/${PC_USER}/dsi-nyc-5/${GH_USER}.github.io/images"

    FILE_NAME="$1"
    CURR_DIR=`pwd`
    FILE_BASE=`basename $FILE_NAME .ipynb`

    POST_NAME="${FILE_BASE}.md"
    IMG_NAME="${FILE_BASE}_files"

    POST_DATE_NAME=`date "+%Y-%m-%d-"`${POST_NAME}

    # convert the notebook
    jupyter nbconvert --to markdown $FILE_NAME

    # change image paths
    sed -i .bak "s:\[png\](:[png](/images/:" $POST_NAME

    # move everything to blog area
    mv  $POST_NAME "${POST_PATH}/${POST_DATE_NAME}"
    mv  $IMG_NAME "${IMG_PATH}/"

    # add files to git repo to be included in next commit
    cd $POST_PATH
    git add $POST_DATE_NAME
    cd $IMG_PATH
    git add $IMG_NAME

    # make git submission
    cd ..
    git commit -m "\"New blog entry ${FILE_BASE}\""

    # push changes to server
    git push

    cd $CURR_DIR
}