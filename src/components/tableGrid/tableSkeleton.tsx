'use client'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Skeleton } from '@mui/material';

interface TableSkeletonProps {
    rows?: number
    columns: number
}

export default function TableSkeleton({ columns, rows = 5}: TableSkeletonProps) {

    let listRenderRowsHeader = []
    let listRenderColumns = []
    let listRenderRows = []

    for (let index = 0; index < columns; index++) {
        listRenderRowsHeader.push(
            <TableCell key={`headColimn-${index}`}>
                <Skeleton/>
            </TableCell>
        )
    }

    for (let index = 0; index < columns; index++) {
        listRenderColumns.push(
            <TableCell component="th" scope="row" key={`column-${index}`}>
                <Skeleton/>
            </TableCell>
        )
    }

    for (let index = 0; index < rows; index++) {
        listRenderRows.push(
            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }} key={`row-${index}`}>
                {listRenderColumns}
            </TableRow>
        )
    }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {listRenderRowsHeader}
          </TableRow>
        </TableHead>
        <TableBody>
          {listRenderRows}
        </TableBody>
      </Table>
    </TableContainer>
  );
}