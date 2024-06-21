import React from 'react'
import MagnifierImg from '../(commponads)/magnifier'
import photo from "../../../public/baby.json";
import { Box, Chip, Divider, Fab, Rating, Typography } from '@mui/material';
import SelectCity from '../(commponads)/SelectCity';
const src = photo.map((e) => e.imageSrc)

function page({ params }: {
    params: {
        product: string

    }
}) {
    console.log(src);

    return (
        <Box sx={{ display: "flex", }}>
            <MagnifierImg sampleImg={photo[0].imageSrc} />
            <Typography variant='h5'
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    margin: "100px 0px auto 0",
                    padding: "20px 25px 20px 20px",
                    color: "black",
                    bgcolor: "white",
                    lineHeight: "3",
                    width: "30%"
                }}>
                <Typography variant='h3' margin="10px auto 0 auto">
                    طقم دفاية بيبى شتوى قطيفة
                </Typography>
                <Typography variant='h4' component={"h4"} sx={{ display: "flex", mt: "15px" }}>
                    150 جنيه
                    <Typography
                        variant='h4'
                        component={"h4"}
                        sx={{
                            mr: "10px",
                            color: "GrayText"
                        }}>
                        <sub style={{ textDecoration: "line-through 3px" }}>
                            300 جنيه
                        </sub>
                    </Typography>
                </Typography>
                الأسعار تشمل ضريبة القيمة المضافة
                <Rating name="read-only" value={3.8} readOnly sx={{ fontSize: "40px", mb: "20px" }} />
                <Divider />
                <Typography variant="h5" margin={"15px 0"} color="initial">
                    الحجم : 6 شهور
                    <br />
                    اللون :
                </Typography>
                <Divider />
                <Typography variant='h3' margin="15px auto 0 auto" > تفاصيل المنتج</Typography>
                تركيبة المواد100% قطيفة
                تعليمات العنايةHand Wash Only
                نوع السحّابPull On
            </Typography>

            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    margin: "100px 0px auto 0",
                    padding: "20px",
                    border: "2px solid black",
                    color: "black",
                    bgcolor: "white",
                    lineHeight: "3",
                    width: "20%",
                    mr: "2%",
                }}>
                <Typography variant='h4' component={"h4"} sx={{ display: "flex", mt: "15px" }}>
                    150 جنيه
                </Typography>
                <SelectCity />
                <Fab
                    variant="extended"
                    size="medium"
                    color="primary"
                    sx={{ mt: "10px" }}
                >
                    أضف إلي العربة
                </Fab>
                <Fab
                    variant="extended"
                    size="medium"
                    color="primary"
                    sx={{ mt: "10px" }}
                >
                    اشترٍ الآن
                </Fab>
            </Box>
        </Box>
    )
}

export default page