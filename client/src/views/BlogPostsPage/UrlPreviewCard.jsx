export const UrlPreviewCard = props => {
    return (
        <Card>
            <Image src={props.image} />
            <CardContent>
                <Typography>{props.title}</Typography>
                <Typography>{props.description}</Typography>
            </CardContent>
        </Card>
    )
}